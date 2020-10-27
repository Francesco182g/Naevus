from django.http import HttpResponse
import numpy as np
import cv2
import matplotlib.pyplot as plt
from matplotlib.pyplot import imread
import scipy.ndimage as ndimage
from PIL import Image
from keras.models import load_model
from skimage import transform
import time
import argparse
import glob

def checkBlur():
        '''
        Description
        ----------
        Check image quality
        '''
        

def balanceColorImage():
        '''
        Description
        ------------
        Balance color image,

        Returns
        -------
        Image processed
        '''


def cutImage():
        '''
        Description
        ------------
        Cut the uploaded image,

        Returns
        -------
        Null
        '''
        imageObject = Image.open("/home/userthink/Thesis/backend/media/melorigin.jpg")
        cropped = imageObject.crop((360, 730, 700, 1050))
        cropped.save('/home/userthink/Thesis/backend/media/mel.jpg')
        src = cv2.imread("/home/userthink/Thesis/backend/media/mel.jpg")

        #print(src.shape)
        #cv2.imshow("original Image", src)

        # Convert the original image to grayscale
        grayScale = cv2.cvtColor(src, cv2.COLOR_RGB2GRAY)
        #cv2.imshow("GrayScale", grayScale)
        #cv2.imwrite('grayScale_sample1.jpg', grayScale, [int(cv2.IMWRITE_JPEG_QUALITY), 90])

        # Kernel for the morphological filtering
        kernel = cv2.getStructuringElement(1, (17, 17))

        # Perform the blackHat filtering on the grayscale image to find the
        # hair countours
        blackhat = cv2.morphologyEx(grayScale, cv2.MORPH_BLACKHAT, kernel)
        #cv2.imshow("BlackHat", blackhat)
        #cv2.imwrite('blackhat_sample1.jpg', blackhat, [int(cv2.IMWRITE_JPEG_QUALITY), 90])

        # intensify the hair countours in preparation for the inpainting
        # algorithm
        ret, thresh2 = cv2.threshold(blackhat, 10, 255, cv2.THRESH_BINARY)
        print(thresh2.shape)
        #cv2.imshow("Thresholded Mask", thresh2)
        #cv2.imwrite('thresholded_sample1.jpg', thresh2, [int(cv2.IMWRITE_JPEG_QUALITY), 90])

        # inpaint the original image depending on the mask
        dst = cv2.inpaint(src, thresh2, 1, cv2.INPAINT_TELEA)
        #cv2.imshow("InPaint", dst)
        cv2.imwrite('/home/userthink/Thesis/backend/media/mel.jpg', dst)
def getBorder():

        # CANNY (NOT USE)
        '''
        img_gscale = cv2.imread('/home/userthink/Thesis/backend/media/mel.jpg', 0)
        img_color = cv2.imread('/home/userthink/Thesis/backend/media/mel.jpg', 1)

        edges = cv2.Canny(img_gscale, 50, 110)
        kernel = np.ones((5, 5), np.uint8)
        closing = cv2.morphologyEx(edges, cv2.MORPH_CLOSE, kernel, iterations=1)

        inpaint_telea = cv2.inpaint(img_color, closing, 3, cv2.INPAINT_TELEA)

        # Resize dell'immagine
        dim = (700, 700)
        resized = cv2.resize(inpaint_telea, dim, interpolation=cv2.INTER_AREA)

        # Salvataggio dell'immagine
        cv2.imwrite('/home/userthink/Thesis/backend/media/mel.jpg', resized)
        cv2.waitKey(0)
        '''
        img = cv2.imread('/home/userthink/Thesis/backend/media/mel.jpg')
        hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        blur = cv2.GaussianBlur(gray, (17, 17), 32)
        ret, thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

        contours, hierarchy = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        cnt = max(contours, key=cv2.contourArea)

        mask = np.zeros(img.shape[:2], dtype=img.dtype)
        ellipse = cv2.fitEllipse(cnt)
        print("Value: ", len(cnt))
        x, y, w, h = cv2.boundingRect(cnt)
        area = hsv[int(y + (0.3 * h)):int(y + (0.8 * h)), int((0.2 * w) + x):int((0.7 * w) + x)]
        ellipse_cnt = cv2.ellipse2Poly((int(ellipse[0][0]), int(ellipse[0][1])),
                                               (int(ellipse[1][0]), int(ellipse[1][1])), int(ellipse[2]), 0, 360, 1)
        comp = cv2.matchShapes(cnt, ellipse_cnt, 1, 0.0)
        variance = cv2.meanStdDev(area)
        #print(area)
        #print("comp", comp)
        # Immagine solo nevo
        # draw all contours larger than 20 on the mask
        for c in contours:
                if cv2.contourArea(c) > 20:
                        x, y, w, h = cv2.boundingRect(c)
                        cv2.drawContours(mask, [c], 0, (255), -1)

        # apply the mask to the original image
        result = cv2.bitwise_and(img, img, mask=mask)
        cv2.ellipse(img, ellipse, (0, 255, 0), 2)

        #cv2.imshow('result', result)
        cv2.imwrite('/home/userthink/Thesis/backend/media/cutted.png', result)
        cv2.waitKey(0)
        cv2.destroyAllWindows()
        return len(cnt)

def blackRemove():
        img = Image.open('/home/userthink/Thesis/backend/media/cutted.png')
        img = img.convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
                if item[0] < 3 and item[1] < 3 and item[2] < 3:
                        newData.append((255, 255, 255, 0))
                else:
                        newData.append(item)

        img.putdata(newData)
        img.save("/home/userthink/Thesis/backend/media/border.png", "PNG")
        '''
        # Stampa l'immagine
        np_image = Image.open('/home/userthink/Thesis/backend/media/border.png')
        plt.imshow(np_image)
        plt.show()
        '''



def getClassified():
        time.sleep(2)
        # Caricamento del Modello h5
        model = load_model('/home/userthink/Thesis/backend/final_model.h5', compile=False)

        np_image = Image.open('/home/userthink/Thesis/backend/media/cutted.png')
        #plt.imshow(np_image)
        #plt.show()
        np_image = np.array(np_image).astype('float32') / 255
        np_image = transform.resize(np_image, (224, 224, 3))
        
        np_image = np.expand_dims(np_image, axis=0)
        c = model.predict(np_image)
        c= int(c*100)
        #print(c)
        return(c)

def index(request):
        cutImage()
        cnt = getBorder()
        if(cnt < 200):
                blackRemove()
                c = getClassified()
        else:
                c = "0"
        return HttpResponse(c)