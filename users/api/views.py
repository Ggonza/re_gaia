from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from users.api.serializers import customUserSerializer

from users.models import customUser


class customUserApiViewSet(ModelViewSet):
    queryset = customUser.objects.all()
    permission_classes = [IsAdminUser]
    serializer_class = customUserSerializer

    def create(self, request, *args, **kwargs):
        request.data['password'] = make_password(request.data['password'])
        return super().create(request, *args, **kwargs)

    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        password = request.data.get('password')

        print("CREATE PATCH: ", request.data)
        print("CREATE ARGS: ", kwargs.get('pk'))
        if password:
            request.data['password'] = make_password(password)
        else:
            request.data['password'] = request.user.password
        return super().update(request, *args, **kwargs)


class customUserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = customUserSerializer(request.user)
        return Response(serializer.data)

    def post(self, request):
        serializer = customUserSerializer(request.user)
        return Response(serializer.data)
