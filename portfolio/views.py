from django.shortcuts import render

def home_page_view(request):
	return render(request, 'portfolio/index.html')

def more_page_view(request):
	return render(request, 'portfolio/more.html')

def grad_page_view(request):
	return render(request, 'portfolio/licen.html')

def blog_page_view(request):
	return render(request, 'portfolio/blog.html')