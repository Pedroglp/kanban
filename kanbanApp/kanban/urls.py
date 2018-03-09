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
from taskmanager.api import UserViewSet, StatusViewSet
from taskmanager.api import TaskViewSet
from rest_framework import routers
from rest_framework.authtoken import views as authViews
from django.views.decorators.csrf import csrf_exempt
from django.urls import include
from taskmanager.views import home
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'status', StatusViewSet)
router.register(r'task', TaskViewSet)

urlpatterns = [
    re_path(r'^$', home, name="uHome"),
    path('admin/', admin.site.urls),
    re_path(r'api/', include(router.urls)),
    path('api/token-auth', authViews.obtain_auth_token)
]
urlpatterns += staticfiles_urlpatterns()