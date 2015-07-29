# coding: utf-8

from logic.forms import *
from logic.tools import *
from django.http import HttpResponse

__author__ = '英达'


# 处理用户注册事件
def register(request):
    if request.method == 'POST':
        from logic.models import User
        new_user = User()
        form = RegisterForm(request.POST)
        if form.is_valid():
            new_user.uid = form.cleaned_data['uid']
            new_user.password = form.cleaned_data['password']
            new_user.lobby_id = 0
            if not has_same_uid(new_user):
                new_user.save()
                return HttpResponse("ok!")
            else:
                return HttpResponse("same name!")
