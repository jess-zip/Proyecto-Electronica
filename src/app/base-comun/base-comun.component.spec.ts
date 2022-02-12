import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComunComponent } from './base-comun.component';

describe('BaseComunComponent', () => {
  let component: BaseComunComponent;
  let fixture: ComponentFixture<BaseComunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseComunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
