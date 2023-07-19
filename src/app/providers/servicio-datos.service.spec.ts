import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { ServicioDatosService } from './servicio-datos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatosNba } from '../interfaces/datos-nba';



describe('ServicioDatosService', () => {
  let service: ServicioDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ ServicioDatosService ]
      
    });
    service = TestBed.inject(ServicioDatosService);
  });

  it('ServicioDatos should return value from observable', () => {
    service.getResponse().subscribe(data => {
      expect((data as DatosNba[]).length).toBeGreaterThan(0)
      
    });
  });
});
