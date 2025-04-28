from django.urls import path
from .views import DocumentoUpLoadView


urlpatterns = [

    path('upload/', DocumentoUpLoadView.as_view(), name='upload'),
]