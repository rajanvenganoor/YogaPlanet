from django.contrib import admin
from adminsortable2.admin import (
    SortableAdminBase,
    SortableInlineAdminMixin
)

from .models import (
    YogaCategory,
    YogaPose,
    YogaVinyasa,
    YogaVinyasaStep
)

from .models import YogaClient, YogaAdvertisement


# -------------------------
# Category Admin
# -------------------------
@admin.register(YogaCategory)
class YogaCategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)
# -------------------------
# Category YogaClientAdmin
# -------------------------
@admin.register(YogaClient)
class YogaClientAdmin(admin.ModelAdmin):
    list_display = ("client_code", "name", "contact_no", "client_status", "amount_paid")
    search_fields = ("client_code", "name")
    list_filter = ("client_status",)

# -------------------------
# Category YogaAdvirtisementAdmin
# -------------------------
@admin.register(YogaAdvertisement)
class YogaAdvertisementAdmin(admin.ModelAdmin):
    list_display = (
        "client",
        "active_from",
        "active_to",
        "display_seconds",
        "amount_received",
        "is_active",
    )
    list_filter = ("is_active", "active_from")
    search_fields = ("client__name",)

# -------------------------
# Vinyasa Step Inline (Sortable)
# -------------------------
class YogaVinyasaStepInline(SortableInlineAdminMixin, admin.TabularInline):
    model = YogaVinyasaStep
    extra = 1
    fields = ("pose", "order", "hold_seconds", "notes")
    ordering = ("order",)


# -------------------------
# Vinyasa Admin (MUST inherit SortableAdminBase)
# -------------------------
@admin.register(YogaVinyasa)
class YogaVinyasaAdmin(SortableAdminBase, admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)
    inlines = [YogaVinyasaStepInline]


# -------------------------
# Pose Admin
# -------------------------

@admin.register(YogaPose)
class YogaPoseAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "maturity")
    search_fields = ("name",)
    list_filter = ("category",)

    radio_fields = {
        "maturity": admin.HORIZONTAL,
    }

    fieldsets = (
        ("Basic Info", {
            "fields": ("name", "category", "maturity")
        }),
        ("Details", {
            "fields": ("description", "procedure", "benefits", "precautions")
        }),
        ("Images", {
            "fields": ("image", "cimage")
        }),
    )

    class Media:
        js = ('yoga/js/pose_admin.js',)
# -------------------------
# Admin Branding (Optional but nice)
# -------------------------
admin.site.site_header = "YogaPlanet Admin"
admin.site.site_title = "YogaPlanet Admin"
admin.site.index_title = "Yoga Content Management"

