import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuUsuariosComponent } from './cu-usuarios.component';

describe('CuUsuariosComponent', () => {
  let component: CuUsuariosComponent;
  let fixture: ComponentFixture<CuUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
