
from rest_framework.routers import DefaultRouter
from myapp.views import ItemAPI

router = DefaultRouter()
router.register(r'items', ItemAPI, basename='item')
urlpatterns = router.urls
