import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScanmultiPage } from '../scanmulti/scanmulti';
import { ScanFarPage } from "../scan-far/scan-far";
import { ScanQrPage } from "../scan-qr/scan-qr";
import { TwoDPage } from "../two-d/two-d";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  scanMulti(){
    this.navCtrl.setRoot(ScanmultiPage);
  }
  scanFar(){
    this.navCtrl.setRoot(ScanFarPage);
  }
  scanQR(){
    this.navCtrl.setRoot(ScanQrPage);
  }
  scan2D(){
    this.navCtrl.setRoot(TwoDPage);
  }

}
