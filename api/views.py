from django.shortcuts import render
from rest_framework import generics, status
from .models import Student
from .serializers import StudentSerializer, CreateStudentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class StudentView(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    
class CreateStudentView(APIView):
    serializer_class = CreateStudentSerializer
    
    def post(self, request, format=None):
        # checking if the user has already signed in/created a session
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)
        # check if the data inputed match with constraints of the model
        if serializer.is_valid():
            name = serializer.data.get('name')
            age = serializer.data.get('age')
            URL = serializer.data.get('URL')
            password = serializer.data.get('password')
            queryset = Student.objects.filter(URL=URL)
            
            if queryset.exists():
                student = queryset[0]
                student.name = name
                student.age = age
                student.password = password
                student.save(update_fields=['name', 'age', 'password'])
            else:
                student = Student(name=name, age=age, URL=URL, password=password)
                student.save()
                
            
            return Response(StudentSerializer(student).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
