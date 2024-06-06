import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
   
  }
  server_address = "http://localhost:5000/adddata";
  
  testapi(data: any){
    return this.http.post(
      this.server_address,
      JSON.stringify(data)
    )
  }

}
