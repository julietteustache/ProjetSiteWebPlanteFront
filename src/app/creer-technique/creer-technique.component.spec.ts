import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerTechniqueComponent } from './creer-technique.component';

describe('CreerTechniqueComponent', () => {
  let component: CreerTechniqueComponent;
  let fixture: ComponentFixture<CreerTechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerTechniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
