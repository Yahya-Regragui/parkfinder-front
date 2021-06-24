import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Parking } from '../parking.model';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  parkings$: Parking[];
  apiUrl:string = 'http://localhost:3000/parkings/';



  headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');


  constructor(public _authService: AuthService ,private http: HttpClient) { }

  selectedFile:File = null;

  ngOnInit() {
    return  this.http.get<any>(this.apiUrl).subscribe(
      data => {this.parkings$ = data});
      
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

}
