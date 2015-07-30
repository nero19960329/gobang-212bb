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


# 将类转为字典
def to_dict(obj):
    dict = {}
    for name, value in vars(obj).items():
        if name == '_state':
            continue
        dict[name] = value
    return dict
