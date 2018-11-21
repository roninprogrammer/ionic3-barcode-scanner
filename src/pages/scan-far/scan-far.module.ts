import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanFarPage } from './scan-far';

@NgModule({
  declarations: [
    ScanFarPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanFarPage),
  ],
})
export class ScanFarPageModule {}
