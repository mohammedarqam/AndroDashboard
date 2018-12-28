import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
})
export class AppointmentsPage {

  appointments : Array<any> = [];

  constructor(
    public navCtrl: NavController, 
    public db: AngularFireDatabase,
    public alertCtrl : AlertController,
    public toastCtrl :  ToastController,
    public loadingCtrl : LoadingController,
    public navParams: NavParams
    ) {
      this.getAppointments();
    }
  

    getAppointments(){

      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
    

      this.db.list("Appointment").snapshotChanges().subscribe(snap=>{
        this.appointments = [];
        snap.forEach(snip=>{
          let temp : any= snip.payload.val() ;
          temp.key = snip.key;
          this.appointments.push(temp);
        })
        loading.dismiss();
      })
    }


    delPConfirm(a){
      let alert = this.alertCtrl.create({
        title: 'Confirm Delete',
        message: 'Do you want to delete this Appointment ?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Delete',
            handler: () => {
              this.delApp(a);
            }
          }
        ]
      });
      alert.present();
    }

  delApp(a){
    firebase.database().ref("Appointment").child(a.key).remove().then(()=>{
      this.presentToast("Appointment Deleted");
    })
  }    


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
  
    toast.present();
  }

}
