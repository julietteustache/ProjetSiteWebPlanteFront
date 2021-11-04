import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPlanteComponent } from './modif-plante.component';

describe('ModifPlanteComponent', () => {
  let component: ModifPlanteComponent;
  let fixture: ComponentFixture<ModifPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifPlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
