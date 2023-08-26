import { Component, Input } from '@angular/core';

import { DatosNba } from '../interfaces/datos-nba';
import { ServicioDatosService } from '../providers/servicio-datos.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  template: `
    <p>Received parameter: {{ receivedParam }}</p>
  `
})
export class ServicesComponent {

  public data: DatosNba[] = [];

  @Input() receivedParam: number=0;


  constructor(private dataProvider: ServicioDatosService){

  }


  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response:any) => { 
      this.data = (response.data as DatosNba[]).slice(0,8)
      
    })

    
    
    
  }

  

}
