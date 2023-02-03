from django.conf import settings
from django.db import models
class Profile(models.Model):
    'Generated Model'
    phone_number = models.CharField(max_length=25,)
    ss_id = models.BigIntegerField()
