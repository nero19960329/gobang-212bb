# coding: utf-8

from logic.forms import *
from logic.tools import *
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.shortcuts import render, render_to_response
import json

__author__ = '英达'


# 处理用户注册事件
def register(request):
    if request.method == 'GET':
        from logic.models import User
        new_user = User()
        new_user.uid = request.GET['reg_user']
        new_user.password = request.GET['reg_password']
        password_again = request.GET['reg_password_again']
        new_user.name = request.GET['reg_name']
        new_user.lobby_id = 0
        if new_user.password == password_again :
            if not has_same_uid(new_user):
                new_user.save()
                return HttpResponseRedirect("http://127.0.0.1:8000")
            else:
                return HttpResponse("same name!")
        else:
            return HttpResponse("两次密码输入不一致！")


# 处理用户登录事件
def login(request):
    if request.method == 'POST':
        from logic.models import User
        cur_user = User()
        form = RegisterForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['uid']
            password = form.cleaned_data['password']
            q = User.objects.filter(uid=username, password=password)
            if q.__len__() != 0:
                cur_user.name = q[0].name
                cur_user.uid = q[0].uid
                userdict = {'uid': username, 'name': cur_user.name}
                return render(request, 'login_complete.html', {'Dict': json.dumps(userdict)})
            else:
                return HttpResponse("用户名或密码错误！")

