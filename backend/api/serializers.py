from rest_framework import serializers
from .models import *

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ('urn','name', 'age', 'mail', 'module', 'responsible_academics_1', 'responsible_academics_2')
        
        
class AcademicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Academics
        fields = ('acad_id', 'name', 'age', 'mail')
        
        
class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ('project_id', 'name', 'deadline', 'student', 'marked', 'marked_by', 'desciption')
        
class ConvenerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Convener
        fields = ('convener_id', 'name', 'age', 'mail')

class MarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mark
        fields = ("id",  'project', 'marked_by','status', 'deadline', 'functional_criteria', 'style_criteria', 'syntax_criteria', 'total_mark', 'comments')

        
      