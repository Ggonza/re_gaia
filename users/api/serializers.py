from rest_framework import serializers
from users.models import customUser
from data.models import Students

class customUserSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = customUser
        fields = ['id','username','email','first_name',
                  'last_name','password','role','is_active','dni']

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ['id','username','email','first_name',
                  'last_name','password','role','is_active','is_staff']