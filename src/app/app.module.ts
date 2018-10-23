import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRScanner } from '@ionic-native/qr-scanner';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { QRcodescannerPage } from '../pages/q-rcodescanner/q-rcodescanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QRcodescannerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QRcodescannerPage
  ],
  providers: [
    StatusBar,
    QRScanner,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
