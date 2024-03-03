from xml.dom import ValidationErr
from django.db import models

# Create your models here.


class Module(models.Model):
    name = models.CharField(max_length=100)
    module_code = models.CharField(max_length=10, primary_key=True)
    
    def __str__(self):
        return self.module_code
    
class Convener(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    convener_id = models.IntegerField(primary_key=True)
    mail = models.EmailField(unique=True)
    
    def __str__(self):
        return self.name
    
class Academics(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    acad_id = models.IntegerField(primary_key=True)
    mail = models.EmailField(unique=True)
    
    def __str__(self):
        return self.name

class Students(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    urn = models.IntegerField(primary_key=True)
    mail = models.EmailField(max_length=50,unique=True)
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    responsible_academics_1 = models.ForeignKey(Academics, related_name='responsible_academics_1', on_delete=models.CASCADE, null=True, default=None)
    responsible_academics_2 = models.ForeignKey(Academics, related_name='responsible_academics_2', on_delete=models.CASCADE, null=True, default=None)
    
    def __str__(self):
        return self.name
    
    
class Projects(models.Model):
    name = models.CharField(max_length=100)
    project_id = models.AutoField(primary_key=True)
    deadline = models.DateField()
    student = models.ForeignKey(Students, on_delete=models.CASCADE)
    marked = models.BooleanField()
    marked_by = models.ForeignKey(Academics, on_delete=models.CASCADE, related_name='marked_by')
    desciption = models.TextField(null=True, default=None)

    class Meta:
        # Ensure each project is unique to a student
        unique_together = ('name', 'student')
        
    def save(self, *args, **kwargs):
        # Check if this is a new object (not updating existing)
        if not self.pk:
            # Get the maximum project_id and increment it by 1
            max_id = Projects.objects.aggregate(models.Max('project_id'))['project_id__max']
            self.project_id = 1 if max_id is None else max_id + 1
        super().save(*args, **kwargs)


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
    
    class Meta:
        # Ensure each project has exactly two marks from two academics
        unique_together = ('project', 'marked_by')