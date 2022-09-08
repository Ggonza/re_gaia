from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView

from users.api.views import customUserApiViewSet, customUserView

router_user = DefaultRouter()
router_user.register(
    prefix='customUser', basename='customUser',viewset=customUserApiViewSet
)

urlpatterns = [
    path('auth/me/',customUserView.as_view()),
    path('auth/login/',TokenObtainPairView.as_view(), name="token_obtain_pair"),
]