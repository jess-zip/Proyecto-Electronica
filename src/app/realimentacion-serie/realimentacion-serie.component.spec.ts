import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealimentacionSerieComponent } from './realimentacion-serie.component';

describe('RealimentacionSerieComponent', () => {
  let component: RealimentacionSerieComponent;
  let fixture: ComponentFixture<RealimentacionSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealimentacionSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealimentacionSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
