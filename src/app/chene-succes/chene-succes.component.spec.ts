import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheneSuccesComponent } from './chene-succes.component';

describe('CheneSuccesComponent', () => {
  let component: CheneSuccesComponent;
  let fixture: ComponentFixture<CheneSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheneSuccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheneSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
