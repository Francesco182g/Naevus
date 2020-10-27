import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Naevus
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { HttpClientModule } from '@angular/common/http';
import {ApiDjangoService} from './api-django.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

import { Crop } from '@ionic-native/crop/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';

import {Screenshot} from '@ionic-native/screenshot/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    CameraPreview,
    Base64ToGallery,
    ApiDjangoService,
    NativeStorage,
    Crop,
    File,
    PhotoViewer,
    Screenshot,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
