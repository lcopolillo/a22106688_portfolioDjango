from django import forms
from django.forms import ModelForm
from .models import Post


class PostForm(ModelForm):
    class Meta:
        model = Post
        fields = '__all__'

        widgets = {
            'titulo': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'nome do post'}),
        }

        labels = {
            'titulo': 'Título',
            'descricao': 'Descrição',
        }
