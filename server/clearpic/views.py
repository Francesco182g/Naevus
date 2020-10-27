from django.shortcuts import render
from django.http import HttpResponse
import os

def index(request):
    if os.path.exists("/home/userthink/Thesis/backend/media/melorigin.jpg"):
        os.remove("/home/userthink/Thesis/backend/media/melorigin.jpg")
    else:
        print("The file does not exist FILE melorigin")

    if os.path.exists("/home/userthink/Thesis/backend/media/cutted.png"):
        os.remove("/home/userthink/Thesis/backend/media/cutted.png")
    else:
        print("The file does not exist FILE cutted")

    if os.path.exists("/home/userthink/Thesis/backend/media/test.jpg"):
        os.remove("/home/userthink/Thesis/backend/media/test.jpg")
    else:
        print("The file does not exist FILE test")

    if os.path.exists("/home/userthink/Thesis/backend/media/border.png"):
       os.remove("/home/userthink/Thesis/backend/media/border.png")
    else:
        print("The file does not exist FILE border.png")

    if os.path.exists("/home/userthink/Thesis/backend/media/color.png"):
       os.remove("/home/userthink/Thesis/backend/media/color.png")
    else:
        print("The file does not exist FILE color.png")

    if os.path.exists("/home/userthink/Thesis/backend/media/def.jpg"):
        os.remove("/home/userthink/Thesis/backend/media/def.jpg")
    else:
        print("The file does not exist FILE def")

    if os.path.exists("/home/userthink/Thesis/backend/media/border1.png"):
        os.remove("/home/userthink/Thesis/backend/media/border1.png")
    else:
        print("The file does not exist FILE border1.png")

    if os.path.exists("/home/userthink/Thesis/backend/media/mel.jpg"):
        os.remove("/home/userthink/Thesis/backend/media/mel.jpg")
    else:
        print("The file does not exist FILE mel.jpg")

    if os.path.exists("/home/userthink/Thesis/backend/media/photometric3D.png"):
        os.remove("/home/userthink/Thesis/backend/media/photometric3D.png")
    else:
        print("The file does not exist FILE photometric3D.png")

    if os.path.exists("/home/userthink/Thesis/backend/media/photometric.png"):
        os.remove("/home/userthink/Thesis/backend/media/photometric.png")
    else:
        print("The file does not exist FILE mel.jpg")

    if os.path.exists("/home/userthink/Thesis/backend/media/diameter.png"):
        os.remove("/home/userthink/Thesis/backend/media/diameter.png")
    else:
        print("The file does not exist FILE diameter.png")

    return HttpResponse("Clear All DONE.")
