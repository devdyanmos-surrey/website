# Generated by Django 5.0.2 on 2024-03-02 22:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_merge_20240302_2217'),
    ]

    operations = [
        migrations.AddField(
            model_name='students',
            name='responsible_academics_1',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='responsible_academics_1', to='api.academics'),
        ),
        migrations.AddField(
            model_name='students',
            name='responsible_academics_2',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='responsible_academics_2', to='api.academics'),
        ),
    ]