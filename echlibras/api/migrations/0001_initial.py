# Generated by Django 5.2 on 2025-04-28 01:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Documento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('arquivo', models.FileField(upload_to='upload/')),
                ('nome', models.CharField(db_column='pdfs enviados', max_length=255)),
            ],
        ),
    ]
