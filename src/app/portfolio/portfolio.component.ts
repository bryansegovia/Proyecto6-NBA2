import { Component,Input } from '@angular/core';
import { DatosNba } from '../interfaces/datos-nba';
import { ServicioDatosService } from '../providers/servicio-datos.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  template: `
    <p>Received parameter: {{ receivedParam }}</p>
  `
})
export class PortfolioComponent {
  
  @Input() receivedParam: number=0;
  public data: DatosNba[] = [];
  private chart: Chart | undefined;
  constructor(private dataProvider:ServicioDatosService){

  }
  


  ngOnInit(){
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as DatosNba[]).slice(0,8)
      const dset: number[] = [parseFloat(this.data[this.receivedParam].W), parseFloat(this.data[this.receivedParam].L), parseFloat(this.data[this.receivedParam].FGM), 
      parseFloat(this.data[this.receivedParam].FTM), parseFloat(this.data[this.receivedParam].BLK), parseFloat(this.data[this.receivedParam].STL)];
    
      const data2 = {
        labels: [
          'Wins',
          'Defeats',
          'Field Goals',
          'Free Throws',
          'Blocks',
          'Steals'
        ],
        datasets:[{
          label: 'Player Stats',
          data: dset,
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      };
  
  
      const ctx = document.getElementById(String(this.receivedParam)) as HTMLCanvasElement;
      this.chart = new Chart(ctx,{
        type: "radar",
        data: data2
        
      })    
    })  
  }
}
 