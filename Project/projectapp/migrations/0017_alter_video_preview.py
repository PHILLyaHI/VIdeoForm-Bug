# Generated by Django 4.1.1 on 2022-11-04 02:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projectapp', '0016_alter_video_preview'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='preview',
            field=models.ImageField(default='', upload_to='photos/'),
        ),
    ]
