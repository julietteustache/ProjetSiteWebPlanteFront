import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseSuccesComponent } from './rose-succes.component';

describe('RoseSuccesComponent', () => {
  let component: RoseSuccesComponent;
  let fixture: ComponentFixture<RoseSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoseSuccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoseSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
