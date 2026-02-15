
from rest_framework import serializers
from .models import YogaAdvertisement
from .models import (
    YogaCategory,
    YogaPose,
    YogaVinyasa,
    YogaVinyasaStep,
)
# -------------------------
# YogaAdvertisementSerializer
# -------------------------

class AdvertisementSerializer(serializers.ModelSerializer):
    image_url = serializers.ImageField(source="image", read_only=True)

    class Meta:
        model = YogaAdvertisement
        fields = ["id", "description", "image_url", "display_seconds"]


class AdvertisementSerializer(serializers.ModelSerializer):
    image_url = serializers.ImageField(source="image", read_only=True)

    class Meta:
        model = YogaAdvertisement
        fields = ["id", "description", "image_url", "display_seconds"]


# -------------------------
# CATEGORY
# -------------------------
class YogaCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = YogaCategory
        fields = [
            "id",
            "name",
        ]


# -------------------------
# POSE (MASTER)
# -------------------------
class YogaPoseSerializer(serializers.ModelSerializer):
    category = YogaCategorySerializer(read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = YogaPose
        fields = [
            "id",
            "name",
            "category",
            "description",
            "benefits",
            "image",
        ]

    def get_image(self, obj):
        request = self.context.get("request")
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None


# -------------------------
# VINYASA STEP (ORDERED)
# -------------------------
class YogaVinyasaStepSerializer(serializers.ModelSerializer):
    pose = YogaPoseSerializer(read_only=True)

    class Meta:
        model = YogaVinyasaStep
        fields = [
            "id",
            "step_order",
            "hold_seconds",
            "pose",
        ]


# -------------------------
# VINYASA (WITH STEPS)
# -------------------------
class YogaVinyasaSerializer(serializers.ModelSerializer):
    steps = YogaVinyasaStepSerializer(many=True, read_only=True)

    class Meta:
        model = YogaVinyasa
        fields = [
            "id",
            "name",
            "purpose",
            "steps",
        ]

class YogaPoseSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source="category.name", read_only=True)
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = YogaPose
        fields = [
            "id",
            "name",
            "description",
            "procedure",
            "benefits",
            "category",
            "category_name",            
            "precautions",
            "image",
            "image_url",
            "maturity",
            "cimage",
         ]

    def get_image_url(self, obj):
        request = self.context.get("request")
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None
