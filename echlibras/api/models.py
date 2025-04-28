from django.db import models

class Documento(models.Model):
    arquivo = models.FileField(upload_to='upload/')
    nome = models.CharField(db_column='pdfs enviados', max_length=255)

    def __str__(self):
        return self.nome

