import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisorVccyvbbComponent } from './emisor-vccyvbb.component';

describe('EmisorVccyvbbComponent', () => {
  let component: EmisorVccyvbbComponent;
  let fixture: ComponentFixture<EmisorVccyvbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmisorVccyvbbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisorVccyvbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
