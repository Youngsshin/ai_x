from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    # User가 삭제될 때, profile 데이터는 어떻게 할건지?(1:N 관계에서 on_delete를 안하면 에러 발생함)
    user = models.OneToOneField(User,
                                on_delete=models.CASCADE)
    phone_number = models.CharField(verbose_name="전화번호", max_length=20)
    address = models.CharField(verbose_name="주소", max_length=100)
    def __str__(self):
        return "{}({}-{})".format(self.user.username, 
                                self.phone_number,
                                self.address)