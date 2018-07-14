#_*_coding:utf8_*_
from django.urls import path
from . import views
urlpatterns = [
    path('list', views.blog_list, name='blog_list'),
]