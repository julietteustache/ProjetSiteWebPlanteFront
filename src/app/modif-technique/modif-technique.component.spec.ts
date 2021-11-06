import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifTechniqueComponent } from './modif-technique.component';

describe('ModifTechniqueComponent', () => {
  let component: ModifTechniqueComponent;
  let fixture: ComponentFixture<ModifTechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifTechniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
