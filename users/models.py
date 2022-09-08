import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class customUser(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = "ADMIN" , 'Administrador'
        TEACHER = "TEACHER", 'Profesor'
        CHEFF = "CHEF", 'Cocinero'

    base_role = Role.ADMIN

    role = models.CharField(max_length=50, choices= Role.choices)
    institute = models.UUIDField(default='e3fcd046-c392-4f4a-8ac7-029c89fd9d4b')

    def save(self, *args, **kwargs):
        if not self.pk:
            self.role = self.base_role
            return super().save(*args, **kwargs)