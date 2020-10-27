from django.http import HttpResponse
import cv2, numpy as np
from sklearn.cluster import KMeans
from PIL import Image
import matplotlib.pyplot as plt
from matplotlib.pyplot import imread
import scipy.ndimage as ndimage

percentFinal = 0

def visualize_colors(cluster, centroids):
        # Get the number of different clusters, create histogram, and normalize
        global percentFinal
        labels = np.arange(0, len(np.unique(cluster.labels_)) + 1)
        (hist, _) = np.histogram(cluster.labels_, bins=labels)
        hist = hist.astype("float")
        hist /= hist.sum()

        # Create frequency rect and iterate through each cluster's color and percentage
        rect = np.zeros((50, 300, 3), dtype=np.uint8)
        colors = sorted([(percent, color) for (percent, color) in zip(hist, centroids)])
        start = 0
        for (percent, color) in colors:
                if percent <= 0.7:
                        percentFinal = percent * 100
                        print(color, "{:0.2f}%".format(percent * 100))
                        percent = percent * 10
                        end = start + (percent * 300)
                        cv2.rectangle(rect, (int(start), 0), (int(end), 50),
                        color.astype("uint8").tolist(), -1)
                        start = end
        return rect, percentFinal



def index(request):
        # Load image and convert to a list of pixels
        image = cv2.imread('/home/userthink/Thesis/backend/media/border.png')
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        reshape = image.reshape((image.shape[0] * image.shape[1], 3))
        cv2.imwrite('/home/userthink/Thesis/backend/media/color.png', reshape)
        # Find and display most dominant colors
        cluster = KMeans(n_clusters=6).fit(reshape)
        visualize, percentFinal = visualize_colors(cluster, cluster.cluster_centers_)
        visualize = cv2.cvtColor(visualize, cv2.COLOR_RGB2BGR)
        cv2.imwrite('/home/userthink/Thesis/backend/media/color.png', visualize)
        cv2.waitKey(0)

        # Black Remove [0, 0, 0]
        img = Image.open('/home/userthink/Thesis/backend/media/color.png')
        img = img.convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
                if item[0] == 0 and item[1] == 0 and item[2] == 0:
                        newData.append((255, 255, 255, 0))
                else:
                        newData.append(item)

        img.putdata(newData)
        img.save("/home/userthink/Thesis/backend/media/color.png", "PNG")
        # Stampa l'immagine
        np_image = Image.open('/home/userthink/Thesis/backend/media/color.png')
        #plt.imshow(np_image)
        #plt.show()
        '''
        #Resize
        basewidth = 1000
        img = Image.open('/home/userthink/Thesis/backend/media/color.png')
        wpercent = (basewidth / float(img.size[0]))
        hsize = int((float(img.size[1]) * float(wpercent)))
        img = img.resize((basewidth, hsize), PIL.Image.ANTIALIAS)
        img.save('/home/userthink/Thesis/backend/media/color.png')
        plt.imshow(img)
        plt.show()
        '''
        percentFinal = round(percentFinal, 1)
        return HttpResponse(percentFinal)
