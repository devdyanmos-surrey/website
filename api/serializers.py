from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student 
        fields = ('id', 'name', 'age', 'URL', 'password')
        
class CreateStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('name', 'age', 'URL', 'password')