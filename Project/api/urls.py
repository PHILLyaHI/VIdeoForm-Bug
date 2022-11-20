from rest_framework import routers
from .views import VideoViewSet

router = routers.DefaultRouter()
router.register('videos', VideoViewSet, 'videos')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls

