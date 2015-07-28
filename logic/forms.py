#coding: utf-8

__author__ = '王昭'

from django import forms


class RegisterForm(forms.Form):
    uid = forms.CharField(
        label='',
        max_length=8,
        widget=forms.TextInput(
            attrs={'placeholder': "请输入用户名"}
        ),
    )
    password = forms.CharField(
        label='',
        max_length=16,
        widget=forms.PasswordInput(
            attrs={'placeholder': "请输入密码"}
        ),
    )
