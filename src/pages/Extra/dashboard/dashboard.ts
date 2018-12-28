import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  apps : number = 0;
  conts : number = 0;

  constructor(
    public navCtrl: NavController,
    private menuCtrl: MenuController,
  ) {
    this.menuCtrl.enable(true);
  }

  ionViewDidEnter(){
    this.getAppointments();
  }
  getAppointments(){
    firebase.database().ref("Appointment").once("value",itemsSnap=>{
      this.apps = itemsSnap.numChildren();
    })
  }

} 
