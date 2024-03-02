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
    
    def retrieve(self, request):
        student = self.queryset.get(pk=request.data.get('urn'))
        serializers = self.serializer_class(student)
        return Response(serializers.data)
    
    def update(self, request):
        student = self.queryset.get(pk=request.data.get('urn'))
        serializers = self.serializer_class(student, data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        else:
            return Response(serializers.errors, status=400)
    
    def destroy(self, request):
        student = self.queryset.get(pk=request.data.get('urn'))
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