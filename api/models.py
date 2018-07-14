from django.db import models


# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=50)
    context = models.TextField()
    pub_date = models.DateTimeField('date published')
