from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .serializers import *
from rest_framework.response import Response
from .models import *


# Create your views here.
def login(request):
    return HttpResponse("this is login page")


class StudentViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    
    def list(self, request):
        queryset = self.queryset
        serializers = self.serializer_class(queryset, many=True)
        return Response(serializers.data)
    
    def create(self, request):
        serializers = self.serializer_class(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        else:
            return Response(serializers.errors, status=400)
    
    def retrieve(self, request, pk=None):
        student = self.queryset.get(pk=pk)
        serializers = self.serializer_class(student)
        return Response(serializers.data)
    
    def update(self, request, pk=None):
        student = self.queryset.get(pk=pk)
        serializers = self.serializer_class(student, data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        else:
            return Response(serializers.errors, status=400)
    
    def destroy(self, request, pk=None):
        student = self.queryset.get(pk=pk)
        student.delete()
        return Response(status=204)
    

class AcademicsViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Academics.objects.all()
    serializer_class = AcademicsSerializer
    
    def list(self, request):
        queryset = self.queryset
        serializers = self.serializer_class(queryset, many=True)
        return Response(serializers.data)
    
    def create(self, request):
        serializers = self.serializer_class(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        else:
            return Response(serializers.errors, status=400)
    
    def retrieve(self, request, pk=None):
        academic = self.queryset.get(pk=pk)
        serializers = self.serializer_class(academic)
        return Response(serializers.data)
    
    def update(self, request, pk=None):
        academic = self.queryset.get(pk=pk)
        serializers = self.serializer_class(academic, data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        else:
            return Response(serializers.errors, status=400)
    
    def destroy(self, request, pk=None):
        academic = self.queryset.get(pk=pk)
        academic.delete()
        return Response(status=204)
    
    
class ProjectViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    
    def list(self, request):
        queryset = self.queryset
        serializers = self.serializer_class(queryset, many=True)
        return Response(serializers.data)
    
    def create(self, request):
        serializers = self.serializer_class(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        else:
            return Response(serializers.errors, status=400)
    
    def retrieve(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        serializers = self.serializer_class(project)
        return Response(serializers.data)
    
    def update(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        serializers = self.serializer_class(project, data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        else:
            return Response(serializers.errors, status=400)
    
    def destroy(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        project.delete()
        return Response(status=204)
    
    
class ConvenerViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Convener.objects.all()
    serializer_class = ConvenerSerializer
    
    def list(self, request):
        queryset = self.queryset
        serializers = self.serializer_class(queryset, many=True)
        return Response(serializers.data)
    
    def create(self, request):
        serializers = self.serializer_class(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        else:
            return Response(serializers.errors, status=400)
    
    def retrieve(self, request, pk=None):
        convener = self.queryset.get(pk=pk)
        serializers = self.serializer_class(convener)
        return Response(serializers.data)
    
    def update(self, request, pk=None):
        convener = self.queryset.get(pk=pk)
        serializers = self.serializer_class(convener, data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        else:
            return Response(serializers.errors, status=400)
    
    def destroy(self, request, pk=None):
        convener = self.queryset.get(pk=pk)
        convener.delete()
        return Response(status=204)