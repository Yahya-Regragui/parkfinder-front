import { Component, OnInit, ViewChild } from '@angular/core';
import  {Chart} from 'chart.js';
import { Parking } from '../parking.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  canvas: any;
  ctx: any;
  @ViewChild('pie') pie:any;
  caParking = [];
  chiffreAffaireParkingLabel = [];
  chiffreAffaireParkingNumbers = [];
  parkings$: Parking[];
  apiUrl:string = 'http://localhost:3000/user/admin/stats';
  headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');

  constructor(public _authService: AuthService ,private http: HttpClient) { }

  ngOnInit() {

    return this.http.get<any>(this.apiUrl).subscribe(
      data => {
        this.caParking = data.parkingOccupationPercentage
        

    this.canvas = this.pie.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    for(var i in this.caParking){
      this.chiffreAffaireParkingLabel.push(i)
      this.chiffreAffaireParkingNumbers.push(this.caParking[i])
      
  }

    new Chart(this.ctx, {
      type: 'pie',
      data: {
          datasets: [{
              
              data: this.chiffreAffaireParkingNumbers,
              backgroundColor : [
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)',
                'rgb(132, 2, 25)',
                'rgb(54, 24, 105)'
                
              ]
              
          }],
          labels: this.chiffreAffaireParkingLabel,
        
      },
  });
  }

    )}
}
