from django.contrib import admin
from blog.models import Post # Post : 테이블이랑 연동되는 class

# Register your models here.
admin.site.register(Post) # admin 페이지에서 Post 테이블 엑세스 가능하도록 등록