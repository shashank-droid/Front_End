import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community';
import { DataService } from '../data.service'

@Component({
  selector: 'app-admin-patient-details',
  templateUrl: './admin-patient-details.component.html',
  styleUrl: './admin-patient-details.component.css'
})
export class AdminPatientDetailsComponent {
  constructor(private alldata:DataService){}
  allvalues:any;

  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

   colDefs: ColDef[] = [
   { field: "name", headerName:"name" },
   { field: "ID", headerName:"email" },
   { field: "mobile", headerName:"mobile" },
   { field: "address", headerName:"address" }

   
 ];

 fetchalldata(){
  this.alldata.alldata().subscribe((result)=>{
    console.log(result)
  });
 }
}

