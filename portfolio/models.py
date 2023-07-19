from django.db import models
from django.forms import ModelForm

class Post(models.Model):
    data = models.DateTimeField(auto_now_add=True)
    autor = models.CharField(max_length=20)
    titulo = models.CharField(max_length=100)
    descricao = models.CharField(max_length=2000)
    link = models.URLField(max_length=100, blank=True, null=True)
    imagem = models.ImageField(upload_to='blog/', blank=True, null=True)

    like = models.IntegerField(default=0)
    deslike = models.IntegerField(default=0)

    def __str__(self):
        return self.titulo[:20]
    