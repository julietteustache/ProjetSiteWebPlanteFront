import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TulipeSuccesComponent } from './tulipe-succes.component';

describe('TulipeSuccesComponent', () => {
  let component: TulipeSuccesComponent;
  let fixture: ComponentFixture<TulipeSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TulipeSuccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TulipeSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
