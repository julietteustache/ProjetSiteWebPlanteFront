import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTechniqueComponent } from './afficher-technique.component';

describe('AfficherTechniqueComponent', () => {
  let component: AfficherTechniqueComponent;
  let fixture: ComponentFixture<AfficherTechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherTechniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
