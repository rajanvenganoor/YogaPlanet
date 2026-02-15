
from rest_framework import generics
from .models import (
    YogaCategory,
    YogaPose,
    YogaVinyasa,
)
from .serializers import (
    YogaCategorySerializer,
    YogaPoseSerializer,
    YogaVinyasaSerializer,
)

from rest_framework.views import APIView
from rest_framework.response import Response
from datetime import date
from django.utils.timezone import now
from .models import YogaAdvertisement
from .serializers import AdvertisementSerializer

# -------------------------
# CATEGORY APIS
# -------------------------
class YogaCategoryListView(generics.ListAPIView):
    queryset = YogaCategory.objects.all()
    serializer_class = YogaCategorySerializer


# -------------------------
# POSE APIS
# -------------------------
class YogaPoseListView(generics.ListAPIView):
    serializer_class = YogaPoseSerializer

    def get_queryset(self):
        queryset = YogaPose.objects.select_related("category")

        category_id = self.request.query_params.get("category")
        if category_id:
            queryset = queryset.filter(category_id=category_id)

        return queryset


class YogaPoseDetailView(generics.RetrieveAPIView):
    queryset = YogaPose.objects.select_related("category")
    serializer_class = YogaPoseSerializer


# -------------------------
# VINYASA APIS
# -------------------------
class YogaVinyasaListView(generics.ListAPIView):
    queryset = YogaVinyasa.objects.all()
    serializer_class = YogaVinyasaSerializer


class YogaVinyasaDetailView(generics.RetrieveAPIView):
    queryset = (
        YogaVinyasa.objects
        .prefetch_related(
            "steps__pose",
            "steps__pose__category"
        )
    )

class ActiveAdvertisementsView(APIView):
    def get(self, request):
        ads = YogaAdvertisement.objects.filter(is_active=True)
        serializer = AdvertisementSerializer(ads, many=True)
        is_active=True
        serializer =AdvertisementSerializer(ads, many=True)
        return Response(serializer.data)   # ✅ THIS IS REQUIRED

class ActiveAdvertisementsView(APIView):

    def get(self, request):
        ads = YogaAdvertisement.objects.filter(is_active=True)
        serializer = AdvertisementSerializer(ads, many=True)
        return Response(serializer.data)
