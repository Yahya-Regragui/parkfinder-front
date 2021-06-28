import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Parking } from '../parking.model';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ParkingModalComponent } from '../parking-modal/parking-modal.component';
import { EditParkingComponent } from '../edit-parking/edit-parking.component';



@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})
export class ParkingsComponent implements OnInit {

  
  message: string = "message"


  parkings$: Parking[];
  
  apiUrl:string = 'http://localhost:3000/parkings/';
  headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');

  constructor(public _authService: AuthService ,private http: HttpClient, public dialog:MatDialog) { }

  selectedFile:File = null;

  ngOnInit() {
    return  this.http.get<any>(this.apiUrl).subscribe(
      data => {
        this.parkings$ = data

      
      });
      
  }



  onFileSelected(event){
    this.selectedFile =  <File>event.target.files[0];
  }

  onSubmit(data){
    const fd = new FormData();

    fd.append('parkingImage', this.selectedFile);
    fd.append('name', data.name);
    fd.append('description', data.description);
    fd.append('location_x', data.location_x);
    fd.append('location_y', data.location_y);
    fd.append('totalPlace', data.totalPlace);
    console.log(data.totalPlace)
 
    this.http.post(this.apiUrl, fd)
    .subscribe( res => {
      console.log(res);
    })
}

deleteParking(id){
  let endpoint = this.apiUrl + '/' + id;
 this.http.delete(endpoint)
 .subscribe((result) =>{
   console.warn(result)
   window.location.reload();
 })
 
}

openModal(){
  this.dialog.open(ParkingModalComponent)
}
editParking(parkingId, parkingName,parkingDesc,parkingLocY,parkingLocX,parkingTotalSpots){
  this.dialog.open(EditParkingComponent, 
    {data : {
      parkingId: parkingId,
      parkingName: parkingName,
      parkingDesc: parkingDesc,
      parkingLocY: parkingLocY,
      parkingLocX: parkingLocX,
      parkingTotalSpots: parkingTotalSpots,
    }} )
}


}
