# Generated by Django 5.0.2 on 2024-03-03 03:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_convener_alter_projects_project_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='desciption',
            field=models.TextField(default=None, null=True),
        ),
    ]
