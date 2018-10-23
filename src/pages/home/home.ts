import { Component } from '@angular/core';
import { NavController, Platform  } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  createdCode = null;
  constructor(
    public navCtrl: NavController, 
    private qrScanner: QRScanner,
    public platform: Platform) {

      platform.ready().then(()=>{
        this.QRCodeScanner();
      })

  
      this.createdCode = "Restaurente app"

  }

  QRCodeScanner(){
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted

       // start scanning
       this.qrScanner.show().then(data => {
         console.log("data", data)
          
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
          this.navCtrl.pop();
          });
        });

        this.qrScanner.resumePreview();

        // show camera preview
        this.qrScanner.show()
        .then((data : QRScannerStatus)=> { 
          console.log('data received', data);
        },err => {
          alert(err);

        });
        
       
       
     } else if (status.denied) {
      console.log('Scanned denied', "camera permission was permanently denied");
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
      console.log('permission was denied', "else");

       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));
  }

}
