from rest_framework import viewsets
from myapp.models import Item
from myapp.serializers import ItemSerializer

# Create your views here.
class ItemAPI(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
