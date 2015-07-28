__author__ = 'Administrator'

STATUS_ONLINE = 10000       # 在线状态
STATUS_LEAVE = 10001        # 离开状态
STATUS_OFFLINE = 10002      # 离线状态


class User:
    id = ""                     # 用户名
    name = ""                   # 昵称
    password = ""               # 密码
    score = 0                   # 天梯积分
    total_games = 0             # 总局数
    win_games = 0               # 胜场
    tie_games = 0               # 平场
    lose_games = 0              # 负场
    head_id = 0                 # 头像id
    status = STATUS_OFFLINE     # 在线状态

    # 初始化
    def __init__(self):
        pass

    # 设置用户名
    def set_id(self):
        pass

    # 设置/修改昵称
    def set_name(self):
        pass

    # 设置/修改密码
    def set_password(self):
        pass

    # 发送好友请求
    def send_friendrequest(self):
        pass

    # 获取好友列表
    def get_friendlist(self):
        pass

    # 获取游戏历史记录
    def get_history(self):
        pass


