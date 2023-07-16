from django.shortcuts import render
from . import views
from django.urls import path

app_name = "portfolio"

urlpatterns = [
    path('', views.home_page_view, name='home'),
    path('home', views.home_page_view, name='home'),
    path('more', views.more_page_view, name='more'),
    path('grad', views.grad_page_view, name='grad'),
    path('blog/', views.blog_home_page_view, name='blog_home'),
    path('blog/new', views.blog_new_post_view, name='blog_new'),
    path('blog/edit/<int:post_id>', views.blog_edit_post_view, name='blog_edit'),
    path('blog/delete/<int:post_id>', views.blog_delete_post_view, name='blog_delete'),
]