from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

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
@login_required
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

#like post
def blog_like_post(request, id_post):
    likesNoPost = Post.objects.get(id=id_post).like
    likesNoPost += 1
    Post.objects.filter(id=id_post).update(like=likesNoPost)

    return HttpResponseRedirect(reverse('portfolio:blog_home'))

#deslike post
def blog_deslike_post(request, idP):
    deslikesNoPost = Post.objects.get(id=idP).deslike
    deslikesNoPost += 1
    Post.objects.filter(id=idP).update(deslike=deslikesNoPost)

    return HttpResponseRedirect(reverse('portfolio:blog_home'))

#login
def login_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request,
                            username=username,
                            password=password)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse('portfolio:home')) 
        else:
            return render(request, "portfolio/login.html", {
                'message': "Invalid credentials."
            })
    return render(request, "portfolio/login.html") 

def logout_view(request):
     logout(request)
     return render(request, "portfolio/login.html", {
                'message': "Successfuly loged out."
            })