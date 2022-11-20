# frontend/urls.py

from django.urls import path

from .views import index, VideoDetails

urlpatterns = [
    path('', index),
    path('edit/<int:pk>', VideoDetails.as_view()),
    path('delete/<int:pk>', VideoDetails.as_view()),
]