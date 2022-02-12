import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFijaComponent } from './menu-fija.component';

describe('MenuFijaComponent', () => {
  let component: MenuFijaComponent;
  let fixture: ComponentFixture<MenuFijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
