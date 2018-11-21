
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScanAnyPage } from '../pages/scan-any/scan-any';
import { ScanFarPage } from '../pages/scan-far/scan-far';
import { ScanQrPage } from '../pages/scan-qr/scan-qr';
import { TwoDPage } from '../pages/two-d/two-d';
import { ScanmultiPage } from '../pages/scanmulti/scanmulti'; 
 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
