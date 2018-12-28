import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/Extra/dashboard/dashboard';
import { LoginPage } from '../pages/Extra/login/login';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ContactUsPage } from '../pages/MainPages/contact-us/contact-us';
import { AppointmentsPage } from '../pages/MainPages/appointments/appointments';



export const firebaseCred = {
  apiKey: "AIzaSyD_i1KYWVQla7bK9Lg4c72BnJUsy-XZTcw",
  authDomain: "androlife-dashboard.firebaseapp.com",
  databaseURL: "https://androlife-dashboard.firebaseio.com",
  projectId: "androlife-dashboard",
  storageBucket: "androlife-dashboard.appspot.com",
  messagingSenderId: "134490518258"
};
firebase.initializeApp(firebaseCred);




@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    LoginPage,
    ContactUsPage,
    AppointmentsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    LoginPage,
    ContactUsPage,
    AppointmentsPage,

  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
