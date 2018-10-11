#importing required packages
from django.http import HttpResponse
from django.template import loader
from django.views.decorators.csrf import csrf_exempt

# disabling csrf (cross site request forgery)
@csrf_exempt
def index(request):

   

    context = {
        'organs': [1,2],
        'observations': [1,2],
        'species' : [1,2],
        'sex' : [1,2],
        'routes': [1,2],
        'num_studies' : 1,
        'num_structures' : 2
    }
  
    template = loader.get_template('index.html')
    return HttpResponse(template.render(context, request))

@csrf_exempt
def login(request):

    context = {
        'organs': [1,2],
        'observations': [1,2],
        'species' : [1,2],
        'sex' : [1,2],
        'routes': [1,2],
        'num_studies' : 1,
        'num_structures' : 2
    }
  
    template = loader.get_template('login.html')
    return HttpResponse(template.render(context, request))

@csrf_exempt
def example(request):

    context = {
        'organs': [1,2],
        'observations': [1,2],
        'species' : [1,2],
        'sex' : [1,2],
        'routes': [1,2],
        'num_studies' : 1,
        'num_structures' : 2
    }
  
    template = loader.get_template('example.html')
    return HttpResponse(template.render(context, request))

@csrf_exempt
def example2(request):

    context = {
        'organs': [1,2],
        'observations': [1,2],
        'species' : [1,2],
        'sex' : [1,2],
        'routes': [1,2],
        'num_studies' : 1,
        'num_structures' : 2
    }
  
    template = loader.get_template('example2.html')
    return HttpResponse(template.render(context, request))