import { Component, OnInit, NgZone } from '@angular/core';
import { UploadingService } from  '../uploading.service';
import { ApiDjangoService } from  '../api-django.service';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { concat, Observable } from  'rxjs';
import { HttpClient } from '@angular/common/http';

import { Crop, CropOptions } from '@ionic-native/crop/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { AlertController, LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
  public fileUploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  nameOfSource : any;
  dark: any;
  classificatore = 'load';
  asymmetry = '0.0';


  constructor(private uploadingService: UploadingService,
     private http:HttpClient, private apiDjangoService: ApiDjangoService,
     private file: File, private ngZone: NgZone,
     public loadingController: LoadingController) { 
  }

  fileOverBase(event): void {
    this.hasBaseDropZoneOver = event;
  }
  
  getFiles(): FileLikeObject[] {
    return this.fileUploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }

  uploadFiles() {

    let files = this.getFiles();
    console.log(files.toString())
    let requests = [];
    files.forEach((file) => {
      console.log("file: " + file)
      let formData = new FormData();
      formData.append('file' , file.rawFile, file.name);
      requests.push(this.uploadingService.uploadFormData(formData));
      requests.push(this.apiDjangoService.getClassified());
      this.dark="dark";
      this.presentLoading();
    });
    concat(...requests).subscribe(
      (res) => {
        console.log(res);
        this.classificatore = " " +res + " %";
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
      },
      (err) => {  
        console.log(err);
      }
    );
  }



  reset(){
    let requests = [];
    this.nameOfSource=null;
    this.dark="";
    this.fileUploader.cancelAll();
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

  changePlaying() {
    this.ngZone.run(() => {
      this.nameOfSource = "http://192.168.1.2:8000/media/melar.jpg";
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 4000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.changePlaying();
    this.getAsymmetry();
  }
}
