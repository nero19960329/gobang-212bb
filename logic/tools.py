# coding: utf-8

__author__ = '王昭'


# 判断是否有相同id的用户存在
def has_same_uid(user):
    from logic.models import User
    temp_user = User.objects.filter(uid=user.uid)
    if temp_user.__len__() == 0:
        return False
    else:
        return True
