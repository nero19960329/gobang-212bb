# coding:utf-8

from django.shortcuts import render, render_to_response
from django.template import RequestContext

from .forms import RegisterForm
from logic.models import *

# Create your views here.


# 主页显示
def home(request):
    form = RegisterForm()
    lobbies = Lobby.objects.all()
    return render_to_response("index.html", {
        'form': form,
        'lobbies': lobbies,
    }, context_instance=RequestContext(request))


# 大厅显示
def lobby(request):
    lobby_id = int(request.GET['lid'])
    if lobby_id == 1:           # 非积分区，需要显示桌子
        rooms = Room.objects.filter(lobby_id=1)
        lobby_users = User.objects.filter(lobby_id=lobby_id)
        all_user_number = lobby_users.__len__()
        return render_to_response("lobby.html", {
            'rooms': rooms,
            'lobby_users': lobby_users,
            'all_user_number': all_user_number,
        }, context_instance=RequestContext(request))
    else:                       # 天梯区，无需显示桌子，只需显示按钮
        pass
    return render_to_response("lobby.html", context_instance=RequestContext(request))

