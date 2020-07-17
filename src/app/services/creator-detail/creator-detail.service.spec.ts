import { TestBed } from '@angular/core/testing';

import { CreatorDetailService } from './creator-detail.service';

describe('CreatorDetailService', () => {
  let service: CreatorDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
