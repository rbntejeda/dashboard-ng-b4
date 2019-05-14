import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavegationComponent } from './menu-navegation.component';

describe('MenuNavegationComponent', () => {
  let component: MenuNavegationComponent;
  let fixture: ComponentFixture<MenuNavegationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNavegationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
