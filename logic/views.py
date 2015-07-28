# coding:utf-8

from django.shortcuts import render, render_to_response
from django.template import RequestContext
from django.http import HttpResponse
from logic.tools import *

from .forms import RegisterForm

# Create your views here.


def home(request):
    form = RegisterForm()
    return render_to_response("index.html", {
        'form': form,
    }, context_instance=RequestContext(request))


def lobby(request):
    return render_to_response("lobby.html", context_instance=RequestContext(request))


# 处理用户注册事件
def register(request):
    if request.method == 'POST':
        from logic.models import User
        new_user = User()
        form = RegisterForm(request.POST)
        if form.is_valid():
            new_user.uid = form.cleaned_data['uid']
            new_user.password = form.cleaned_data['password']
            if not has_same_uid(new_user):
                new_user.save()
                return HttpResponse("ok!")
            else:
                return HttpResponse("same name!")
