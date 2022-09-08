from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from users.api.serializers import customUserSerializer

from users.models import customUser

class  customUserApiViewSet(ModelViewSet):
    permission_classes = [IsAdminUser]
    serializer_class = customUserSerializer
    queryset = customUser.objects.all()

    def create(self, request, *args, **kwargs):
        request.data['password'] = make_password(request.data['password'])
        return super().create(request,*args,**kwargs)

    def update(self, request, *args, **kwargs):
        password = request.data['password']
        kwargs['partial'] = True
        if password:
            request.data['password'] = make_password(password)
        else:
            request.data['password'] = request.customUser.password

        return super().update(request, *args, **kwargs)

class customUserView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        serializer = customUserSerializer(request.user)
        return Response(serializer.data)