"""kanban URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from taskmanager.api import UserTaskList, UserViewSet, StatusViewSet
from taskmanager.api import TaskViewSet
from rest_framework import routers
from rest_framework.authtoken import views as authViews
from django.views.decorators.csrf import csrf_exempt
from django.urls import include

router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'status',StatusViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/my-tasks', UserTaskList.as_view()),
    re_path(r'api/task/(?P<pk>[0-9]+)$',TaskViewSet.as_view()),
    path('api/token-auth', authViews.obtain_auth_token)
]
