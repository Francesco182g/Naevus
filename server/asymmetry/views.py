from django.http import HttpResponse
import os
import numpy as np
import cv2
from PIL import Image
import matplotlib.pyplot as plt
from matplotlib.pyplot import imread
import scipy.ndimage as ndimage

#3D
def get3D():
        imageFile = '/home/userthink/Thesis/backend/media/cutted.png'
        mat = imread(imageFile)
        mat = mat[:, :, 0]  # get the first channel
        rows, cols = mat.shape
        xv, yv = np.meshgrid(range(cols), range(rows)[::-1])

        blurred = ndimage.gaussian_filter(mat, sigma=(4, 4), order=0)
        fig = plt.figure(figsize=(30, 30))
        ax = plt.axes(projection='3d')
        ax.set_axis_off()
        ax.elev = 10
        ax.plot_surface(xv, yv, blurred)
        fig.savefig('/home/userthink/Thesis/backend/media/photometric.png')

        # Rotate 90° left
        colorImage = Image.open('/home/userthink/Thesis/backend/media/photometric.png')
        # Rotate it by 90 degrees
        transposed = colorImage.transpose(Image.ROTATE_270)
        # Display the Image rotated by 90 degrees
        #transposed.save("/home/userthink/Thesis/backend/media/photometric.png", "PNG")

        # White Remove [254, 254, 254]
        #img = Image.open('/home/userthink/Thesis/backend/media/photometric.png')
        transposed = transposed.convert("RGBA")
        datas = transposed.getdata()

        newData = []
        for item in datas:
                if item[0] == 255 and item[1] == 255 and item[2] == 255:
                        newData.append((255, 255, 255, 0))
                else:
                        newData.append(item)

        transposed.putdata(newData)
        transposed.save("/home/userthink/Thesis/backend/media/photometric.png", "PNG")




def index(request):
    img = cv2.imread('/home/userthink/Thesis/backend/media/border.png')
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (5, 5), 0)
    ret, thresh = cv2.threshold(blur, 70, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    contours, hierarchy = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    max_cnt = max(contours, key=cv2.contourArea)

    ellipse = cv2.fitEllipse(max_cnt)
    ellipse_pnts = cv2.ellipse2Poly((int(ellipse[0][0]), int(ellipse[0][1])), (int(ellipse[1][0]), int(ellipse[1][1])),
                                    int(ellipse[2]), 0, 360, 1)
    comp = cv2.matchShapes(max_cnt, ellipse_pnts, 1, 0.0)
    #print("Centroid")
    #print(ellipse_pnts)
    comp = comp * 1000
    if comp < 9:
        print(comp)
    else:
        print("Symmetric")

    comp = round(comp, 2)
    get3D()
    return HttpResponse(comp)
