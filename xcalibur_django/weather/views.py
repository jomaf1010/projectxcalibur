from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

import requests

def index(request):
    return getWeather()


def getWeather():

    r = requests.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/265081?apikey=CqU8rJ2v3AzLRYot0hAJrsp5jNwUC1M8")
    r = r.json()
    return JsonResponse(r)