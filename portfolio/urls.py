from django.shortcuts import render
from . import views
from django.urls import path

app_name = "portfolio"

urlpatterns = [
    path('home', views.home_page_view, name='home')
]