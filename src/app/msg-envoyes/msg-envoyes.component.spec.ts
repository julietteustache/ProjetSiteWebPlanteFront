import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgEnvoyesComponent } from './msg-envoyes.component';

describe('MsgEnvoyesComponent', () => {
  let component: MsgEnvoyesComponent;
  let fixture: ComponentFixture<MsgEnvoyesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgEnvoyesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgEnvoyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
