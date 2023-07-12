import { Component } from '@angular/core';

import { DatosNba } from '../interfaces/datos-nba';
import { ServicioDatosService } from '../providers/servicio-datos.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  public data: DatosNba[] = [];

  constructor(private dataProvider: ServicioDatosService){

  }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as DatosNba[]); 
    })
  }

}
