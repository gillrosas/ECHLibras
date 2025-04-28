from rest_framework import generics

from .models import Documento
from .serializers import DocumentoSerializer

class DocumentoUpLoadView(generics.CreateAPIView):
    queryset = Documento.objects.all()
    serializers_class = DocumentoSerializer
