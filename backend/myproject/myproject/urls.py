
from rest_framework.routers import DefaultRouter
from myapp.views import ItemAPI
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'items', ItemAPI, basename='item')
urlpatterns = router.urls + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
