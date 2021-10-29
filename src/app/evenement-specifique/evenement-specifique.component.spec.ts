import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementSpecifiqueComponent } from './evenement-specifique.component';

describe('EvenementSpecifiqueComponent', () => {
  let component: EvenementSpecifiqueComponent;
  let fixture: ComponentFixture<EvenementSpecifiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenementSpecifiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementSpecifiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
