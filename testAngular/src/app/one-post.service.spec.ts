import { TestBed, inject } from '@angular/core/testing';

import { OnePostService } from './one-post.service';

describe('OnePostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnePostService]
    });
  });

  it('should be created', inject([OnePostService], (service: OnePostService) => {
    expect(service).toBeTruthy();
  }));
});
