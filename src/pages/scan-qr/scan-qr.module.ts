import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanQrPage } from './scan-qr';

@NgModule({
  declarations: [
    ScanQrPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanQrPage),
  ],
  exports: [
    ScanQrPage
  ]
})
export class ScanQrPageModule {}
