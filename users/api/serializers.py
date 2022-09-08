from rest_framework import serializers
from users.models import customUser

class customUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = customUser
        fields = ['id','username','email','first_name',
                  'last_name','password','is_active','is_staff']