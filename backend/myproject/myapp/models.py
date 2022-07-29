
from django.db import models

class Item(models.Model):
    CATEGORIES = [
        ('Electronics', 'Electronics'),
        ('Furniture', 'Furniture'),
        ('Clothing', 'Clothing'),
        ('Other', 'Other'),
    ]

    title = models.CharField(max_length=100)
    price = models.FloatField()
    category = models.CharField(max_length=20, choices=CATEGORIES, default='')
    description = models.TextField(max_length=1500)
    image = models.ImageField()