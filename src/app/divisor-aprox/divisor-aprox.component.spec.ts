import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisorAproxComponent } from './divisor-aprox.component';

describe('DivisorAproxComponent', () => {
  let component: DivisorAproxComponent;
  let fixture: ComponentFixture<DivisorAproxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisorAproxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisorAproxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
