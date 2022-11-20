# todos/api/serializers.py

from rest_framework import serializers

from projectapp.models import Video


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'