# -*- coding: utf-8 -*-
# Import the reverse lookup function
from django.core.urlresolvers import reverse

# view imports
from django.views.generic import DetailView
from django.views.generic import RedirectView
from django.views.generic import UpdateView
from django.views.generic import ListView

# Only authenticated users can access views using this.
from braces.views import LoginRequiredMixin

# Import the form from users/forms.py
from .forms import UserForm

# Import the customized User model
from .models import User

from django.shortcuts import render, render_to_response
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.core.mail import mail_admins
from django.contrib import messages
from django.template import RequestContext
from django.http import HttpResponseRedirect, Http404, HttpResponse


def contact(request):
    if request.POST:
        post = request.POST
        first_name = post.get('first_name')
        last_name = post.get('last_name')
        phone = post.get('phone')
        email = post.get('email')
        learn = post.get('learn')
        topic = post.get('topic')
        _message = post.get('message')
        message = 'first_name: {}, last_name: {}, phone: {} email: {}, learn: {}, topic: {}, message: {}'.format(
            first_name, last_name, phone, email, learn, topic, _message)
        subject = unicode('Submission from {} {}').format(first_name, last_name)
        mail_admins(subject, message)
        _next = '/'
        messages.success(request, 'Thanks for the submission!')
        if _next:
            return HttpResponseRedirect(_next)

    _next = ""
    if request.GET.get('next'):
        _next = request.GET.get('next')

    context = {'next': _next}
    return render_to_response('pages/home.html',
        context,
        context_instance=RequestContext(request))

class UserDetailView(LoginRequiredMixin, DetailView):
    model = User
    # These next two lines tell the view to index lookups by username
    slug_field = "username"
    slug_url_kwarg = "username"


class UserRedirectView(LoginRequiredMixin, RedirectView):
    permanent = False

    def get_redirect_url(self):
        return reverse("users:detail",
            kwargs={"username": self.request.user.username})


class UserUpdateView(LoginRequiredMixin, UpdateView):

    form_class = UserForm

    # we already imported User in the view code above, remember?
    model = User

    # send the user back to their own page after a successful update
    def get_success_url(self):
        return reverse("users:detail",
                    kwargs={"username": self.request.user.username})

    def get_object(self):
        # Only get the User record for the user making the request
        return User.objects.get(username=self.request.user.username)


class UserListView(LoginRequiredMixin, ListView):
    model = User
    # These next two lines tell the view to index lookups by username
    slug_field = "username"
    slug_url_kwarg = "username"