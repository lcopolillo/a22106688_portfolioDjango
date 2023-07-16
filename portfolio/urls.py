from django.shortcuts import render
from . import views
from django.urls import path

app_name = "portfolio"

urlpatterns = [
    path('', views.home_page_view, name='home'),
    path('home', views.home_page_view, name='home'),
    path('more', views.more_page_view, name='more'),
    path('grad', views.grad_page_view, name='grad'),
    path('blog', views.blog_page_view, name='blog'),
]