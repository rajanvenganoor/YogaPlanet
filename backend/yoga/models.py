from django.db import models
from django.core.exceptions import ValidationError
from datetime import date
import os

class YogaCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class YogaPose(models.Model):
    MATURITY_CHOICES = [
        ('A', 'Adult'),
        ('C', 'Child'),
    ]

    category = models.ForeignKey(
        YogaCategory,
        on_delete=models.CASCADE,
        related_name="poses"
    )
    name = models.CharField(max_length=150)
    
    # ✅ New Field: Maturity (Single Character Choice)
    maturity = models.CharField(
        max_length=1,
        choices=MATURITY_CHOICES,
        default='A',
    )

    description = models.TextField(blank=True)
    procedure = models.TextField(blank=True)
    benefits = models.TextField(blank=True)
    precautions = models.TextField(blank=True)

    image = models.ImageField(upload_to="yoga_poses/", blank=True, null=True)
  
   
    class Meta:
        ordering = ["name"]
        unique_together = ("category", "name")
   # ✅ New Field: Child Image (stored inside media/child/)
    cimage = models.ImageField(
        upload_to='child/',
        blank=True,
        null=True
    )
    def __str__(self):
        return self.name


class YogaVinyasa(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField(blank=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class YogaVinyasaStep(models.Model):
    vinyasa = models.ForeignKey(
        YogaVinyasa,
        on_delete=models.CASCADE,
        related_name="steps"
    )
    pose = models.ForeignKey(
        YogaPose,
        on_delete=models.PROTECT
    )
    order = models.PositiveIntegerField(default=0)
    hold_seconds = models.PositiveIntegerField(default=0)
    notes = models.TextField(blank=True)

    class Meta:
        ordering = ["order"]
        unique_together = ("vinyasa", "order")

    def __str__(self):
        return f"{self.order}. {self.pose.name}"

# ---------------- CLIENT ----------------
class YogaClient(models.Model):
    client_code = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=200)
    address = models.TextField(blank=True)
    contact_no = models.CharField(max_length=20)
    email = models.EmailField(blank=True)

    amount_paid = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    client_status = models.CharField(
        max_length=20,
        choices=[('ACTIVE', 'Active'), ('INACTIVE', 'Inactive')],
        default='ACTIVE'
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.client_code} - {self.name}"


# ---------------- FILE VALIDATION ----------------
def validate_ad_file(value):
    ext = os.path.splitext(value.name)[1]
    valid_extensions = ['.jpg', '.jpeg', '.png', '.pdf']
    if ext.lower() not in valid_extensions:
        raise ValidationError("Only JPG, PNG or PDF files allowed.")


# ---------------- ADVERTISEMENT ----------------
class YogaAdvertisement(models.Model):

    client = models.ForeignKey(
        YogaClient,
        on_delete=models.CASCADE,
        related_name="advertisements"
    )

    description = models.TextField(blank=True)

    image = models.FileField(
        upload_to="advertisements/",
        validators=[validate_ad_file]
    )

    display_seconds = models.PositiveIntegerField(default=30)
    priority = models.PositiveIntegerField(default=1)

    active_from = models.DateField()
    active_to = models.DateField()

    date_disabled = models.DateField(blank=True, null=True)
    disable_reason = models.TextField(blank=True)

    amount_received = models.DecimalField(max_digits=10, decimal_places=2)
    amtrec_date = models.DateField()

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "yoga_advertisements"
        ordering = ["priority", "-active_from"]

    def save(self, *args, **kwargs):
        if self.active_to < date.today():
            self.is_active = False
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.client.name} ({self.active_from} - {self.active_to})"
