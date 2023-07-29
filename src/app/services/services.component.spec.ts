import { DatosNba } from '../interfaces/datos-nba';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesComponent } from './services.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServicioDatosService } from '../providers/servicio-datos.service';



describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ServicesComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
  });






});
