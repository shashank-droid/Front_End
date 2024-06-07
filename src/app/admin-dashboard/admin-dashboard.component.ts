import { Component } from '@angular/core';
// import { GoogleMapsModule } from '@angular/google-maps'
import { DataService } from '../data.service'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  constructor(private dat:DataService){

  }
  send_sms(){
    this.dat.sendsms().subscribe();
  }
}
