import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRealimentacionComponent } from './menu-realimentacion.component';

describe('MenuRealimentacionComponent', () => {
  let component: MenuRealimentacionComponent;
  let fixture: ComponentFixture<MenuRealimentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRealimentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRealimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
