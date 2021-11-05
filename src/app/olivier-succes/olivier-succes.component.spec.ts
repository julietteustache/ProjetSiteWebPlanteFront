import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlivierSuccesComponent } from './olivier-succes.component';

describe('OlivierSuccesComponent', () => {
  let component: OlivierSuccesComponent;
  let fixture: ComponentFixture<OlivierSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlivierSuccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlivierSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
