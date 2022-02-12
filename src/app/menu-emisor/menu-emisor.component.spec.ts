import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEmisorComponent } from './menu-emisor.component';

describe('MenuEmisorComponent', () => {
  let component: MenuEmisorComponent;
  let fixture: ComponentFixture<MenuEmisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEmisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEmisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
