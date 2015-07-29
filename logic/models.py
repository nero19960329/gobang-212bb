# coding: utf-8
from django.db import models

# Create your models here.

__author__ = '王昭'

STATUS_ONLINE = 10000       # 在线状态
STATUS_LEAVE = 10001        # 离开状态
STATUS_OFFLINE = 10002      # 离线状态


# 用户表
class User(models.Model):
    uid = models.CharField(max_length=8)        # 用户名
    name = models.CharField(max_length=8)       # 昵称
    password = models.CharField(max_length=16)  # 密码
    lobby_id = models.IntegerField()            # 用户所在大厅id


# 大厅表
class Lobby(models.Model):
    lid = models.IntegerField()                 # 大厅id
    name = models.CharField(max_length=16)      # 大厅名称


# 房间表
class Room(models.Model):
    rid = models.IntegerField()                 # 房间id
    lobby_id = models.IntegerField()            # 房间所在大厅id
    game_id = models.IntegerField()             # 当前进行的游戏id (若没有正在进行游戏，则为0)
    user_id_1 = models.CharField(max_length=8)  # 玩家1id
    user_id_2 = models.CharField(max_length=8)  # 玩家2id
