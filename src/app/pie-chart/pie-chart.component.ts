import { Component, OnInit, ViewChild } from '@angular/core';
import  {Chart} from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  canvas: any;
  ctx: any;
  @ViewChild('pie') pie:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.canvas = this.pie.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'pie',
      data: {
          datasets: [{
              
              data: [20, 40, 40],
              backgroundColor : [
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)'
                
              ]
              
          }],
          labels: [
            'Red',
            'Yellow',
            'Blue'
        ],
        
      },
  });
  }
  

}
