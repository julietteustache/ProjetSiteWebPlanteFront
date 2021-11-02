import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEventComponent } from './formulaire-event.component';

describe('FormulaireEventComponent', () => {
  let component: FormulaireEventComponent;
  let fixture: ComponentFixture<FormulaireEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
