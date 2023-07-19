import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesComponent } from './services.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


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


  it('nav element', ()=> {
          const headerElement: HTMLElement = fixture.nativeElement;
          const nav = headerElement.querySelector('nav')!;
          expect(nav).toBeTruthy();
        });

  it('No p element', ()=> {
          const headerElement: HTMLElement = fixture.nativeElement;
          const nav = headerElement.querySelector('p')!;
          expect(nav).toBeFalsy();
      });



  it('should render the table with the correct data', async() => {

      



  });
});
