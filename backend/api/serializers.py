from rest_framework import serializers
from .models import *

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = '__all__'
        
        
class AcademicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Academics
        fields = '__all__'