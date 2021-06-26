import { Component, OnInit, ViewChild } from '@angular/core';
import  {Chart} from 'chart.js';
import { Parking } from '../parking.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  canvas: any;
  ctx: any;
  @ViewChild('line') line:any;

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
        this.caParking = data.chiffreAffaireParking

        for(var i in this.caParking){
          this.chiffreAffaireParkingLabel.push(i)
          this.chiffreAffaireParkingNumbers.push(this.caParking[i])
          
      }

    this.canvas = this.line.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Current Vallue',
              data:this.chiffreAffaireParkingNumbers,
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
              fill: true,
          }],
          labels: this.chiffreAffaireParkingLabel
      },
      options: {
        scales: {
          yAxes: [{
            ticks : {
              beginAtZero: true
            }
          }]
        }
      }
  });
  
      })
  }
 


}
