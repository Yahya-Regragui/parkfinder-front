import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Parking } from '../parking.model';
import { AuthService } from '../auth.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-parking',
  templateUrl: './edit-parking.component.html',
  styleUrls: ['./edit-parking.component.css']
})
export class EditParkingComponent implements OnInit {

  
  parkings$: Parking[];
  apiUrl:string = 'http://localhost:3000/parkings/';


  headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');


  constructor(public _authService: AuthService ,private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
      
  }


  onSubmit(data, parkingId){
    this.http.patch<any>(this.apiUrl + parkingId , data)
    .subscribe( res => {
      console.log(res);
    })
    window.location.reload();
}



}
