# frontend/views.py

from django.shortcuts import render
from django.views.generic.detail import DetailView

from projectapp.models import Video


def index(request):
    return render(request, 'frontend/index.html')


class VideoDetails(DetailView):
    model = Video
    template_name = 'frontend/index.html'