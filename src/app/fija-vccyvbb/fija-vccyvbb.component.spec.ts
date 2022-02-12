import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FijaVccyvbbComponent } from './fija-vccyvbb.component';

describe('FijaVccyvbbComponent', () => {
  let component: FijaVccyvbbComponent;
  let fixture: ComponentFixture<FijaVccyvbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FijaVccyvbbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FijaVccyvbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
