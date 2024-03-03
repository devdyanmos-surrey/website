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
          
class ConvenerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Convener
        fields = '__all__'

class MarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mark
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'