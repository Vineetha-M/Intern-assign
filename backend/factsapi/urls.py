from django.urls import path
from .views import facts_list

urlpatterns = [
    path('facts/', facts_list),
]
