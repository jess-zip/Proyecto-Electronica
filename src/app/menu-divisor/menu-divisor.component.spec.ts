import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDivisorComponent } from './menu-divisor.component';

describe('MenuDivisorComponent', () => {
  let component: MenuDivisorComponent;
  let fixture: ComponentFixture<MenuDivisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDivisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDivisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
