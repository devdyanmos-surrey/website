from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name='index'),
    path('view_students/', index, name='view_students'),
]
