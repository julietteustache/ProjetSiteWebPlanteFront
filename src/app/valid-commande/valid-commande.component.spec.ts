import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidCommandeComponent } from './valid-commande.component';

describe('ValidCommandeComponent', () => {
  let component: ValidCommandeComponent;
  let fixture: ComponentFixture<ValidCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
