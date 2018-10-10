from django.urls import path
from . import views

urlpatterns = [
    #path('search', views.search, name='search'),
    #path('page', views.page, name='page'),
    #path('download', views.download, name='download'),
    #path('connection', views.testConnection, name='connection'),
    path('', views.index, name='index'),
    path('login', views.login, name='login'),
]