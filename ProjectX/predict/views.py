from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from .ml.ml import Predict
import os
# Create your views here.



def index(request):
    return render(request, "index.html")

def prediction(request):
    answ  = Predict('/home/kaka-linux/Downloads/imgName.png')
    print("new",answ)
    ans = answ + ' = ' + str(eval(answ))
    os.remove('/home/kaka-linux/Downloads/imgName.png')
    return render(request, "prediction.html", context={'ans':ans})
