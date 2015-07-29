# coding:utf-8

from django.shortcuts import render, render_to_response
from django.template import RequestContext

from .forms import RegisterForm

# Create your views here.


def home(request):
    form = RegisterForm()
    return render_to_response("index.html", {
        'form': form,
    }, context_instance=RequestContext(request))


def lobby(request):
    return render_to_response("lobby.html", context_instance=RequestContext(request))

