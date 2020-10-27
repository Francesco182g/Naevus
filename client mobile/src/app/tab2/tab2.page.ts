import { Component, OnInit, NgZone, destroyPlatform } from '@angular/core';
import { CameraPreview } from "@ionic-native/camera-preview/ngx";
import { Platform } from "@ionic/angular";
import { NativeStorage } from '@ionic-native/native-storage/ngx';
//Upload and Analysis import
import { UploadingService } from '../uploading.service';
import { ApiDjangoService } from '../api-django.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { concat } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { Base64ToGallery, Base64ToGalleryOptions } from '@ionic-native/base64-to-gallery/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { ToastController } from '@ionic/angular';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //UPLOAD CODE  
  public fileUploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  fileToUpload: File = null;
  blob: any;


  IMAGE_PATH: any;
  colorEffect = 'none';
  smallPreview: boolean;
  setZoom = 1;
  flashMode = 'off';
  focusMode = 'auto';
  tapFocus: true;

  shot = false;
  active = false;
  activescreenshot = false;
  startAR = false;

  //Nevus Information
  //circle = 1;
  asymmetry: string;
  border: string;
  color: number;
  centroid: string;
  diameter: string;
  classified: string;
  img_color = 'assets/colorful.gif';
  img_photometric = 'assets/color.gif';
  img_border1 = 'assets/loading.gif';
  symmetricInfo: string;

  ipAddress = "http://192.168.43.135:8000"
  online = true;


  constructor(private cameraPreview: CameraPreview,
    private platform: Platform, private storage: NativeStorage,
    private uploadingService: UploadingService, private http: HttpClient,
    private apiDjangoService: ApiDjangoService,
    private base64ToGallery: Base64ToGallery,
     private file: File, private ngZone: NgZone,
     public loadingController: LoadingController,
    private screenshot : Screenshot,
    private photoViewer : PhotoViewer,
    private toastController: ToastController,
    public router: Router
) {
  this.clearAll();
  //this.takePicture();
  }

  async ionViewWillEnter() {
    console.log("WILL ENTER: ");

    await this.startCameraAbove();
  }

  async ionViewWillLeave() {
    console.log("WILL LEAVE");

    await this.stopCamera();
  }

  async startCameraAbove() {
    try {

      await this.platform.ready();
      await this.cameraPreview.startCamera({
        x: 0,
        y: 0,
        width: this.platform.width(),
        height: this.platform.height(),
        toBack: true,
        camera: "rear",
        previewDrag: false,
        tapPhoto: true
      });
    } catch (err) {
      console.error("startCameraAbove", err);
    } finally {
    }
  }

  async stopCamera() {
    try {
      console.log("stopping camera");
      await this.cameraPreview.stopCamera();
    } catch (err) {
      console.error("stop camera error. Err: ", err);
    } finally {
    }
  }

  takePicture() {
    let base64option: Base64ToGalleryOptions = {
      prefix: 'img',
      mediaScanner: false
    };

    this.cameraPreview.takePicture({
      width: 1280,
      height: 1280,
      quality: 100,
    }).then(async (imageData: string) => {
      let b64data = atob(imageData);
      this.IMAGE_PATH = 'data:image/jpeg;base64,' + imageData;
      //this.addImage(this.b64toBlob(imageData));
      this.startAR = true;
      this.addImage(imageData);
      //this.active = true;
      this.base64ToGallery.base64ToGallery(btoa(b64data), { prefix: '_img', mediaScanner: true }).then(
        res => console.log("Saved Success", res),
        err => console.log("Error saving image to gallery ", err)
      );
    }, (err) => {
      console.log(err);
      this.IMAGE_PATH = 'assets/img/test.jpg';
    });
  }

  show() {
    return this.cameraPreview.show();
  }

  async hide() {
    return this.cameraPreview.hide();
  }

  async changeColorEffect() {
    this.cameraPreview.setColorEffect(this.colorEffect);
  }

  async changeZoom() {
    this.cameraPreview.setZoom(this.setZoom);
  }

  async changeFlashMode() {
    this.cameraPreview.setFlashMode(this.flashMode);
  }

  async changeFocusMode() {
    this.cameraPreview.setFocusMode(this.focusMode);
  }

  fileOverBase(event): void {
    this.hasBaseDropZoneOver = event;
  }

  getFiles(): FileLikeObject[] {
    return this.fileUploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }

  addImage(res){
    const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
      const byteCharacters = atob(b64Data);
      const byteArrays = [];
      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      const blob = new Blob(byteArrays, {type: contentType});
      return blob;
    }
    
    const contentType = 'image/png';
    const b64Data = res;
    
    const blob = b64toBlob(b64Data, contentType);
    //const blobUrl = URL.createObjectURL(blob);
    this.uploadImage(blob)
    //const img = document.createElement('img');
    //img.src = blobUrl;
    //document.body.appendChild(img);
  }

  uploadImage(res){
    this.putWait();
    //var blob = new Blob([res], { type: 'image/jpg' });         
    let requests = [];
    let fileName="melorigin.jpg";         
    let formData = new FormData();
    formData.append('file' , res, "melorigin.jpg");
    requests.push(this.uploadingService.uploadFormData(formData));
    concat(...requests).subscribe(
      (res) => {
        console.log(res);
        this.shot = true;
        this.active = true;
        this.getBorder();
      },
      (err) => {  
        console.log(err);
      }
    );
  }


  getAsymmetry() {
    let items = [];
    items.push(this.apiDjangoService.getAsymmetry());
    concat(...items).subscribe(
      (res) => {
        console.log(res);
        this.asymmetry = "" +res;
        this.img_photometric = this.ipAddress + "/media/photometric.png" + "?" + (Math.random() * 3);
        const info = + this.asymmetry;
        if (info > 10){
            this.symmetricInfo = "Simmetrico"
        }
        if(info <= 9){
          this.symmetricInfo = "Leggermente Asimmetrico"
        }
        if(info < 5){
          this.symmetricInfo = "Asimmetrico"
        }
      },
      (err) => {  
        console.log(err);
      }
    );
  }

  getBorder() {
    let items = [];
    items.push(this.apiDjangoService.getBorder());
    concat(...items).subscribe(
      (res) => {
        console.log(res);
        this.classified = "" +res;
        if(this.classified == "0"){
          this.presentToast("Nevo non trovato, riprova");
          this.reshotWait();
          this.reshot();
        }
        else{
        this.img_border1 = this.ipAddress + "/media/border.png" + "?" + (Math.random() * 3);
        //this.uploadLoading();
        this.getAsymmetry();
        this.getColor();
        this.getCentroid();
        this.getDiameter();
        this.presentLoading();
        }  
      },
      (err) => {  
        console.log(err);
      }
    );
  }

  getColor() {
    let items = [];
    items.push(this.apiDjangoService.getColor());
    concat(...items).subscribe(
      (res) => {
        console.log(res);
        const result = "" +res;
        this.img_color = this.ipAddress + "/media/color.png" + "?" + (Math.random() * 3);
        this.color = + result;
        this.putWait();
        this.reshot();
        if (this.color > 15){
          this.getError("Riconoscimento Errato");
        }
      },
      (err) => {  
        console.log(err);
      }
    );
  }

  getCentroid() {
    let items = [];
    items.push(this.apiDjangoService.getCentroid());
    concat(...items).subscribe(
      (res) => {
        console.log(res);
        this.centroid = "" +res;
      },
      (err) => {  
        console.log(err);
      }
    );
  }

  getDiameter() {
    let items = [];
    items.push(this.apiDjangoService.getDiameter(this.setZoom));
    concat(...items).subscribe(
      (res) => {
        console.log(res);
        this.diameter = "" +res;
      },
      (err) => {  
        console.log(err);
      }
    );
  }

  async presentLoading() {
    await delay(4000);
    console.log('Loading dismissed!');
    this.changePlaying();
  }

  async putWait() {
    await delay(4000);
    console.log('WAIT');
  }

  async reshotWait() {
    await delay(1000);
    console.log('WAIT');
  }
  

  async getError(code) {
    alert("Errore: "+ code);
  }
  
  async presentToast(code) {
    let toast = this.toastController.create({
      message: 'Errore: '+code,
      duration: 1000,
      position: 'top'
    });

    (await toast).present();
  }
  
  
  async reshot() {
    await delay(2500);
    this.reset(event);
    if(this.startAR == true){
    this.takePicture();
  }
    console.log('Reshot');
  }

  changePlaying() {
    this.ngZone.run(() => {
      this.shot = true;
      this.active = true;
    });
  }

  reset(event){
    this.ngZone.run(() => {
      let requests = [];
      /*
      this.img_color = 'assets/colorful.gif';
      this.img_photometric = 'assets/color.gif';
      this.img_border1 = 'assets/loading.gif';

      this.color = 0;
      this.classified = "";
      this.asymmetry = "";
      this.centroid = "";
      */
    this.platform.resume.subscribe(() => {
      location.reload();
    });
    requests.push(this.apiDjangoService.clearPic());
    concat(...requests).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {  
        console.log(err);
      }
    );
  });
  }



  openImage(path){
    this.photoViewer.show(path + "?" + (Math.random() * 3));
  }

  async saveScreenshot() {
    this.activescreenshot = true;
    this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(() =>{
      alert("Screenshot Salvato!");
    });
    this.activescreenshot = false;
  }

  clearAll(){
    let requests = [];
    requests.push(this.apiDjangoService.clearPic());
    concat(...requests).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {  
        console.log(err);

      }
    );
  }

  getInfo(){
    this.router.navigate(['tabs/guide']);
  }


  async switchOff(){
    this.startAR = false;
    this.active = true;
    this.shot = false;
    alert("AR OFF!");
    this.ngZone.run(() => {
      let requests = [];
      this.img_color = 'assets/colorful.gif';
      this.img_photometric = 'assets/color.gif';
      this.img_border1 = 'assets/loading.gif';
      
      this.color = 0;
      this.classified = "";
      this.asymmetry = "";
      this.centroid = "";
    this.platform.resume.subscribe(() => {
      location.reload();
    });
    requests.push(this.apiDjangoService.clearPic());
    concat(...requests).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {  
        console.log(err);
      }
    );
  });
  }

}