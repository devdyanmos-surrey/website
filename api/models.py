from django.db import models


# put foreign key ccalled academic that is gonna be the pk of the academic model

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    # academic = models.ForeignKey('Academic', on_delete=models.CASCADE)
    URN = models.CharField(max_length=10, primary_key=True)
    password = models.CharField(max_length=100, null=False)

    def __str__(self):
        return self.name
    
    # create a method to check if the password is valid 
    def is_valid(self, password):
        return self.password == password

class Projects(models.Model):
    project_ID = models.IntegerField(primary_key=True)
    project_details = models.CharField(max_length=100)
    

class Student_Project(models.Model):
    urn = models.IntegerField(primary_key=True)
    project_ID = models.ForeignKey('Projects', on_delete=models.CASCADE)