import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Parking } from '../parking.model';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations$: Parking[];
  apiUrl:string = 'http://localhost:3000/user/reservations/';



  headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');


  constructor(public _authService: AuthService ,private http: HttpClient) { }

  selectedFile:File = null;

  ngOnInit() {
    return  this.http.get<any>(this.apiUrl).subscribe(
      data => {this.reservations$ = data});
      
  }

  


}