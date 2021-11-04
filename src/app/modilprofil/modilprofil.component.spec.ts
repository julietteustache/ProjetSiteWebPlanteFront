import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModilprofilComponent } from './modilprofil.component';

describe('ModilprofilComponent', () => {
  let component: ModilprofilComponent;
  let fixture: ComponentFixture<ModilprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModilprofilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModilprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
