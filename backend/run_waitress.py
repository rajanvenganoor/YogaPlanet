from waitress import serve
from backend.wsgi import application
if __name__ == "_main_":
    serve(application, host='0.0.0.0', port=8000)