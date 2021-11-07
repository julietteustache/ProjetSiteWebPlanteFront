import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgRecusComponent } from './msg-recus.component';

describe('MsgRecusComponent', () => {
  let component: MsgRecusComponent;
  let fixture: ComponentFixture<MsgRecusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgRecusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgRecusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
