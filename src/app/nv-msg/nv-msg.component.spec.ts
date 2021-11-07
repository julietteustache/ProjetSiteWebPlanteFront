import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvMsgComponent } from './nv-msg.component';

describe('NvMsgComponent', () => {
  let component: NvMsgComponent;
  let fixture: ComponentFixture<NvMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
