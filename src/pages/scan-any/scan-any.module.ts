import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanAnyPage } from './scan-any';

@NgModule({
  declarations: [
    ScanAnyPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanAnyPage),
  ],
})
export class ScanAnyPageModule {}
