import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// import { Toast } from '@ionic-native/toast';
//import { DataServiceProvider } from '../../providers/data-service/data-service';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@IonicPage()
@Component({
  selector: 'page-scan-qr',
  templateUrl: 'scan-qr.html',
})
export class ScanQrPage {
  // public barcodeData;
  // products: any[] = [];
  // selectedProduct: any;
  // productFound:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanQrPage');
  }

  scan(){
  //   const options = {
  //     preferFrontCamera: false, // iOS and Android
  //     showFlipCameraButton: true, // iOS and Android
  //     showTorchButton: true, // iOS and Android
  //     torchOn: true, // Android, launch with the torch switched on (if available)
  //     // prompt: 'Place a barcode inside the scan area', // Android
  //     // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
  //     resultDisplayDuration: 500,
  //     formats: 'QR_CODE', // default: all but PDF_417 and RSS_EXPANDED
  //     // Android only (portrait|landscape), default unset so it rotates with the device
  //     orientation: 'portrait',
  //     disableAnimations: true, // iOS
  //     disableSuccessBeep: false // iOS
  //   };

  //   this.barcodeScanner.scan(options).then(barcodeData => {
  //     console.log('Barcode data', barcodeData);
  //    }).catch(err => {
  //        console.log('Error', err);
  //    });
  // }
  }


  back() {
    this.navCtrl.setRoot(HomePage);
  }
}
