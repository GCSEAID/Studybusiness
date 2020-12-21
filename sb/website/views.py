from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def resources(request):
    return render(request, 'resources.html')

def team(request):
    return render(request, 'team.html')

def faq(request):
    return render(request, 'faq.html')

def cases(request):
    return render(request, "cases.html")

def carbolt(request):
    return render(request, "carbolt_mineral_ltd.html")
    
def businessHome(request):
    return render(request, 'business.html')