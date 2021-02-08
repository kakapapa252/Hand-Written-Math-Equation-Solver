from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from .ml.ml import Predict
import os
import json
import base64
from io import BytesIO
# Create your views here.



def index(request):
    return render(request, "index2.html")



@csrf_exempt
def predict(request):
    if request.method == 'POST':
        
        operation = BytesIO(base64.urlsafe_b64decode(request.POST['operation']))

        try:
            operation = Predict(operation)
            print(operation)
            print("eval = " , eval(operation))
            return JsonResponse({
            'operation': str(operation),
            'solution': str(eval(operation)),
        })
        except:
            return JsonResponse({
            'operation': 'Cannot Understand,',
            'solution': 'Yet',
        })