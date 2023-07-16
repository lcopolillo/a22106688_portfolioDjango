from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.urls import reverse

from .models import Post
from .forms import PostForm

#index.html
def home_page_view(request):
	return render(request, 'portfolio/index.html')
#more.html
def more_page_view(request):
	return render(request, 'portfolio/more.html')
#licen.html
def grad_page_view(request):
	return render(request, 'portfolio/licen.html')

#blog
#home
def blog_home_page_view(request):
	context = {'posts': Post.objects.all()}
	return render(request, 'portfolio/blog/home.html', context)

#new post
def blog_new_post_view(request):
    form = PostForm(request.POST or None, request.FILES)
    if form.is_valid():
        form.save()
        return redirect('portfolio:blog_home')

    context = {'form': form}

    return render(request, 'portfolio/blog/new.html', context)

#edit post
def blog_edit_post_view(request, post_id):
    post = Post.objects.get(id=post_id)
    form = PostForm(request.POST or None, instance=post)

    if form.is_valid():
        form.save()
        return HttpResponseRedirect(reverse('portfolio:blog_home'))

    context = {'form': form, 'post_id': post_id}
    return render(request, 'portfolio/blog/edit.html', context)

#delete post
def blog_delete_post_view(request, post_id):
    Post.objects.get(id=post_id).delete()
    return HttpResponseRedirect(reverse('portfolio:blog_home'))