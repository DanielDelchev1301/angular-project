import { TestBed } from '@angular/core/testing';

import { ParfumeService } from './parfume.service';

describe('ParfumeService', () => {
  let service: ParfumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParfumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
