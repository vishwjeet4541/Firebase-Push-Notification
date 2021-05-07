import { Component } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { AlertController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private firebase: Firebase,  platform: Platform,
    private alertCtrl: AlertController) {

      platform.ready().then(() => {
     
        this.initPushNotifications(); 
        this.firebase.onNotificationOpen()
            .subscribe(pushData => {        
   

         
        });
      });

      
    }
    initPushNotifications() {
      this.firebase.getToken()
       .then(token => {
          // save the token server-side and use it to push 
          // notifications to this device
         console.log(`The token is ${token}`);
       })
       .catch(error => {
         console.error('Error getting token', error);
       });
   }

    }



