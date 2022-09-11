import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from data.models import Role, Institutes

# Create your models here.
class customUser(AbstractUser):
    role = models.ForeignKey(Role, models.DO_NOTHING, db_column='role', default='b0a56a7e-314b-11ed-a96a-eb4f76a53aef')
    institute = models.ForeignKey(Institutes, models.DO_NOTHING, db_column='institute',
                                  default='e3fcd046-c392-4f4a-8ac7-029c89fd9d4b')
    dni = models.CharField(max_length=25, default='00000000')

    def save(self, *args, **kwargs):
        if not self.pk:
            return super().save(*args, **kwargs)