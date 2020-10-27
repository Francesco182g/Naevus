from django.http import HttpResponse
import os
import numpy as np
import cv2
from PIL import Image
import matplotlib.pyplot as plt
from matplotlib.pyplot import imread
import scipy.ndimage as ndimage


def index(request):

    return HttpResponse("si")
