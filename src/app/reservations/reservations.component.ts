import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Parking } from '../parking.model';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})



export class ReservationsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  reservations$: Parking[];
  apiUrl:string = 'http://localhost:3000/user/admin/reservations/';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'username'];
  dataSource: any = [];

  headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');
  

  constructor(public _authService: AuthService ,private http: HttpClient) { }

  selectedFile:File = null;

  ngOnInit() {
    return  this.http.get<any>(this.apiUrl).subscribe(
      data => {
        this.dataSource = data
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.paginator
        
      });
      
  }

  
  


}
