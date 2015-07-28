# coding: utf-8
from django.db import models

# Create your models here.

__author__ = '王昭'

STATUS_ONLINE = 10000       # 在线状态
STATUS_LEAVE = 10001        # 离开状态
STATUS_OFFLINE = 10002      # 离线状态


# 用户类
class User(models.Model):
    uid = models.CharField(max_length=8)        # 用户名
    name = models.CharField(max_length=8)       # 昵称
    password = models.CharField(max_length=16)  # 密码
    total_games = models.IntegerField()         # 总场数