from django.http.response import JsonResponse
from .models import Blog

# Create your views here.
def blog_list(request):
    blog_list = [blog for blog in Blog.objects.order_by('-pub_date').all().values()]
    return JsonResponse(dict(data=blog_list))
