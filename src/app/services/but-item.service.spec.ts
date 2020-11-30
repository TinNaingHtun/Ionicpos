import { TestBed } from '@angular/core/testing';

import { ButItemService } from './but-item.service';

describe('ButItemService', () => {
  let service: ButItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
