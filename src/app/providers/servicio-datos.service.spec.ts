import { TestBed } from '@angular/core/testing';

import { ServicioDatosService } from './servicio-datos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('ServicioDatosService', () => {
  let service: ServicioDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ServicioDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
