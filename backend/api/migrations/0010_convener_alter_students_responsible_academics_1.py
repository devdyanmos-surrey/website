# Generated by Django 5.0.2 on 2024-03-02 23:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_convener_alter_students_responsible_academics_1'),
    ]

    operations = [
        migrations.AlterField(
            model_name='students',
            name='responsible_academics_1',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='responsible_academics_1', to='api.academics'),
        ),
    ]
