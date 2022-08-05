from rest_framework.routers import DefaultRouter
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from myapp.views import ItemAPI

router = DefaultRouter()
router.register(r'items', ItemAPI, basename='item')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("myapp.urls"))
]+ router.urls  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)