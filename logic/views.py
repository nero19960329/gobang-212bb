# coding:utf-8

from django.shortcuts import render, render_to_response
from django.template import RequestContext
from django.http import HttpResponse, JsonResponse

from .forms import *
from .models import *
from .tools import *
import json

# Create your views here.


# 在主页中获取各个频道人数
def user_number(request):
    all_lobbies = Lobby.objects.all()
    lobby_length = all_lobbies.__len__()
    user_num = []
    for i in range(0, lobby_length):
        num = User.objects.filter(lobby_id=(i+1)).__len__()
        user_num.append(num)
    return JsonResponse(user_num, safe=False)


# 在频道中获取各种数据信息
def lobby_data(request):
    lobby_dict = {}
    lid = request.GET['lid']
    lobby_users = User.objects.filter(lobby_id=lid)
    lobby_user_list = []
    for user in lobby_users:
        lobby_user_list.append(to_dict(user))
    lobby_dict['lobby_users'] = lobby_user_list
    return JsonResponse(lobby_dict)


# 主页显示
def home(request):
    form = RegisterForm()
    all_lobbies = Lobby.objects.all()
    lobbies = []
    lobby_length = all_lobbies.__len__()
    for i in range(0, lobby_length):
        lobby = {
            'user_num': User.objects.filter(lobby_id=(i+1)).__len__(),
            'lobby_name': all_lobbies[i].name
        }
        lobbies.append(lobby)
    return render_to_response("index.html", {
        'form': form,
        'lobbies': lobbies,
    }, context_instance=RequestContext(request))


# 大厅显示
def lobby(request):
    if request.method == 'POST':
        form = IntoLobbyForm(request.POST)
        if form.is_valid():
            lobby_id = form.cleaned_data['lid']
            user_id = form.cleaned_data['uid']
            curr_user = User.objects.filter(uid=user_id)[0]
            curr_user.lobby_id = lobby_id
            curr_user.save()
            lobby_users = User.objects.filter(lobby_id=lobby_id)
            all_user_number = lobby_users.__len__()
            user_dict = to_dict(curr_user)
            if lobby_id == 1:           # 非积分区，需要显示桌子
                rooms = Room.objects.filter(lobby_id=1)
                into_room_form = IntoRoomForm()
                return render_to_response("lobby.html", {
                    'into_room_form': into_room_form,
                    'lobby_id': lobby_id,
                    'rooms': rooms,
                    'lobby_users': lobby_users,
                    'all_user_number': all_user_number,
                    'user': json.dumps(user_dict),
                    'lid': json.dumps(lobby_id),
                }, context_instance=RequestContext(request))
            else:                       # 天梯区，无需显示桌子，只需显示按钮
                return render_to_response("lobby.html", {
                    'lobby_id': lobby_id,
                    'lobby_users': lobby_users,
                    'all_user_number': all_user_number,
                    'user': json.dumps(user_dict),
                    'lid': json.dumps(lobby_id),
                }, context_instance=RequestContext(request))
    else:
        return home(request)


# 游戏界面显示
def gobang(request):
    if request.method == 'POST':
        form = IntoRoomForm(request.POST)
        if form.is_valid():
            user_id = form.cleaned_data['uid']
            room_id = form.cleaned_data['rid']
            lobby_id = form.cleaned_data['lid']

            # 获取用户信息
            curr_user = User.objects.filter(uid=user_id)[0]

            # 玩家进入房间
            in_room = Room.objects.filter(rid=room_id)[0]
            if in_room.user_id_1 == "":
                in_room.user_id_1 = curr_user.uid
                in_room.save()
            elif in_room.user_id_2 == "":
                in_room.user_id_2 = curr_user.uid
                in_room.save()
            else:
                return HttpResponse("人满了！")

            # 获取房间内玩家信息
            if User.objects.filter(uid=in_room.user_id_1).__len__() != 0:
                user_1 = User.objects.filter(uid=in_room.user_id_1)[0]
                player_1 = to_dict(user_1)
            else:
                player_1 = {}

            if User.objects.filter(uid=in_room.user_id_2).__len__() != 0:
                user_2 = User.objects.filter(uid=in_room.user_id_2)[0]
                player_2 = to_dict(user_2)
            else:
                player_2 = {}

            return render_to_response("gobang.html", {
                'player_1': json.dumps(player_1),
                'player_2': json.dumps(player_2),
            }, context_instance=RequestContext(request))
