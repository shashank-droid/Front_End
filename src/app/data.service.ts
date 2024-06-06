import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
   
  }
  server_address = "http://localhost:5000/adddata";
  
  medication_server = "http://localhost:5000/medication"
  
  testapi(data: any){
    return this.http.post(
      this.server_address,
      JSON.stringify(data)
    )
  }

  medication(data: any){
    return this.http.post(
      this.medication_server,
      JSON.stringify(data)
    )
  }

}
