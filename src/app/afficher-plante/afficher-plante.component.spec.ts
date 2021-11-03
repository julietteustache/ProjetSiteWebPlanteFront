import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPlanteComponent } from './afficher-plante.component';

describe('AfficherPlanteComponent', () => {
  let component: AfficherPlanteComponent;
  let fixture: ComponentFixture<AfficherPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherPlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
