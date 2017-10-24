import { TestBed, inject } from '@angular/core/testing';

import { LastpostsService } from './lastposts.service';

describe('LastpostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LastpostsService]
    });
  });

  it('should be created', inject([LastpostsService], (service: LastpostsService) => {
    expect(service).toBeTruthy();
  }));
});
