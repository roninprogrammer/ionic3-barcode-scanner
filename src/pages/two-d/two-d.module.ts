import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwoDPage } from './two-d';

@NgModule({
  declarations: [
    TwoDPage,
  ],
  imports: [
    IonicPageModule.forChild(TwoDPage),
  ],
})
export class TwoDPageModule {}
