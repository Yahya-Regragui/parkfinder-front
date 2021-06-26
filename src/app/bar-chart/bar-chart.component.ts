import { Component, OnInit, ViewChild } from '@angular/core';
import  {Chart} from 'chart.js';
import { Parking } from '../parking.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('bar') bar:any;

  parkings$: Parking[];
  apiUrl:string = 'http://localhost:3000/user/admin/stats';
  headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');

  caGlobal: number;
  caParking = [];
  pOccupation = [];
  pOccupationPercentage = [];

  parkingOccupationLabel = [];
  parkingOccupationNumbers = [];

  constructor(public _authService: AuthService ,private http: HttpClient) { }

  ngOnInit() {
    return this.http.get<any>(this.apiUrl).subscribe(
      data => {
        this.parkings$ = data
        this.caGlobal = data.chiffreAffaireGlobal
        this.caParking = data.chiffreAffaireParking
        this.pOccupation = data.parkingOccupation
        this.pOccupationPercentage = data.parkingOccupationPercentage
        
    this.canvas =this.bar.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    for(var i in this.pOccupation){
      this.parkingOccupationLabel.push(i)
      this.parkingOccupationNumbers.push(this.pOccupation[i])
      
  }
  

    

    new Chart(this.ctx, {
      type: 'bar',
      data: {
        
        labels: this.parkingOccupationLabel,
        datasets: [{
          label: '# spots taken',
          data: this.parkingOccupationNumbers,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgb(132, 2, 25, 0.2)',
            'rgb(54, 24, 105, 0.2)'
            
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgb(132, 2, 25, 1)',
            'rgb(54, 24, 105, 1)'
          
          
      ],
        borderWidth: 1
  
  
  
    }]
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
    
    
  })
      });
      
  }
  




}
