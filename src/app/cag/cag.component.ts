import { Component, OnInit, ViewChild } from '@angular/core';
import { Parking } from '../parking.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-cag',
  templateUrl: './cag.component.html',
  styleUrls: ['./cag.component.css']
})
export class CagComponent implements OnInit {
  caGlobal: number;
  parkings$: Parking[];
  apiUrl:string = 'http://localhost:3000/user/admin/stats';
  headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');

  constructor(public _authService: AuthService ,private http: HttpClient) { }

  ngOnInit() {
    return this.http.get<any>(this.apiUrl).subscribe(
      data => {
        this.caGlobal = data.chiffreAffaireGlobal
      })


  }

}
