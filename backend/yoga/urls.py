from django.urls import path

from .views import (
    YogaCategoryListView,
    YogaPoseListView,
    YogaPoseDetailView,
    YogaVinyasaListView,
    YogaVinyasaDetailView,
    ActiveAdvertisementsView,
)

app_name = "yoga"

urlpatterns = [

    # -------------------------
    # Active AdvertisementsView
    # -------------------------
    path("ads/", ActiveAdvertisementsView.as_view(), name="active-ads"),

    # -------------------------
    # CATEGORY
    # -------------------------
    path("categories/", YogaCategoryListView.as_view(), name="category-list"),

    # -------------------------
    # POSES
    # -------------------------
    path("poses/", YogaPoseListView.as_view(), name="pose-list"),
    path("poses/<int:pk>/", YogaPoseDetailView.as_view(), name="pose-detail"),

    # -------------------------
    # VINYASAS
    # -------------------------
    path("vinyasas/", YogaVinyasaListView.as_view(), name="vinyasa-list"),
    path("vinyasas/<int:pk>/", YogaVinyasaDetailView.as_view(), name="vinyasa-detail"),
]
