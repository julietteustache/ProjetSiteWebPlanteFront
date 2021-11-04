import { TestBed } from '@angular/core/testing';

import { FormannService } from './formann.service';

describe('FormannService', () => {
  let service: FormannService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormannService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
