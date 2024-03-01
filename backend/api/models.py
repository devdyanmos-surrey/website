from django.db import models

# Create your models here.


class Module(models.Model):
    name = models.CharField(max_length=100)
    module_code = models.CharField(max_length=10, primary_key=True)
    
    def __str__(self):
        return self.module_code

class Students(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    urn = models.IntegerField(primary_key=True)
    mail = models.CharField(max_length=50,unique=True)
    module = models.ForeignKey(Module, on_delete=models.CASCADE)


    

class Academics(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    acad_id = models.IntegerField(primary_key=True)
    mail = models.EmailField(unique=True)
    

    
class Projects(models.Model):
    name = models.CharField(max_length=100)
    project_id = models.IntegerField(primary_key=True)
    deadline = models.DateField()
    student = models.ForeignKey(Students, on_delete=models.CASCADE)
    marked = models.BooleanField()
    marked_by = models.ForeignKey(Academics, on_delete=models.CASCADE, related_name='marked_by')

class Mark(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('save', 'Save'),
        ('submitted', 'Submitted'),
    )
    
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)
    marks = models.IntegerField()
    comments = models.TextField()
    marked_by = models.ForeignKey(Academics, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft')
    deadline = models.DateField()
    modified = models.DateTimeField(auto_now=True)
    
