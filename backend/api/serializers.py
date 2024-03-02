from rest_framework import serializers
from .models import *

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ('urn','name', 'age', 'mail', 'module', 'responsible_academics_1', 'responsible_academics_2')
        
        
class AcademicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Academics
        fields = '__all__'