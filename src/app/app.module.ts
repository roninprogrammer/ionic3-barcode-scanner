
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// import { Toast } from '@ionic-native/toast';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScanFarPage } from '../pages/scan-far/scan-far';
import { ScanQrPage } from '../pages/scan-qr/scan-qr';
import { TwoDPage } from '../pages/two-d/two-d';
import { ScanmultiPage } from '../pages/scanmulti/scanmulti';
import { DataServiceProvider } from '../providers/data-service/data-service'; 
 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScanQrPage,
    ScanFarPage,
    TwoDPage,
    ScanmultiPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScanQrPage,
    ScanFarPage,
    TwoDPage,
    ScanmultiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider,
    // BarcodeScanner,
    // Toast
  ]
})
export class AppModule {}
