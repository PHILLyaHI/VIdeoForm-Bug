from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from api.serializers import VideoSerializer
from projectapp.models import Video


class VideoViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = VideoSerializer

    def get_queryset(self):
        return self.request.user.videos.all()
    
    def perform_created(self, serializer):
        serializer.save(owner=self.request.user)