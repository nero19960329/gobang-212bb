"""gobang URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'logic.views.home', name='home'),
    url(r'^lobby/$', 'logic.views.lobby', name='lobby'),
    url(r'^register/$', 'logic.user.register', name='register'),
    url(r'^login/$', 'logic.user.login', name='login'),
    url(r'^gobang/$', 'logic.views.gobang', name='gobang'),
    url(r'^user_number/$', 'logic.views.user_number', name='user_number'),
    url(r'^lobby_data/$', 'logic.views.lobby_data', name='lobby_data'),
    # url(r'^login_complete$/', 'logic.user.logincomplete', name='login_complete'),
]

urlpatterns += staticfiles_urlpatterns()
