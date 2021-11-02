import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerPlanteComponent } from './creer-plante.component';

describe('CreerPlanteComponent', () => {
  let component: CreerPlanteComponent;
  let fixture: ComponentFixture<CreerPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerPlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
