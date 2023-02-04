from django.conf import settings
from django.db import models
class Profile(models.Model):
    'Generated Model'
    phone_number = models.CharField(max_length=25,)
    ss_id = models.BigIntegerField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL,null=True,blank=True,on_delete=models.CASCADE,related_name="profile_user",)
