from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('students', StudentViewSet, basename='students')
router.register('academics', AcademicsViewSet, basename='academics')
router.register('projects', ProjectViewSet, basename='projects')
urlpatterns = router.urls

# urlpatterns = [
    
#     path('', login, name='login'),
# ]
