from django.db import models


# put foreign key ccalled academic that is gonna be the pk of the academic model

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    # academic = models.ForeignKey('Academic', on_delete=models.CASCADE)
    URL = models.CharField(max_length=10, unique=True)
    password = models.CharField(max_length=100, null=False)

    def __str__(self):
        return self.name
    
    # create a method to check if the password is valid 
    def is_valid(self, password):
        return self.password == password