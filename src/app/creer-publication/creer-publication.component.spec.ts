import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerPublicationComponent } from './creer-publication.component';

describe('CreerPublicationComponent', () => {
  let component: CreerPublicationComponent;
  let fixture: ComponentFixture<CreerPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
