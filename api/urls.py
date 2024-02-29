from django.urls import path
from .views import StudentView, CreateStudentView

urlpatterns = [
   path('students', StudentView.as_view()),
   path('create-student', CreateStudentView.as_view(), name='create-student'),
]
