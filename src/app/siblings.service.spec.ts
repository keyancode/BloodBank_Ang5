import { TestBed, inject } from '@angular/core/testing';

import { SiblingsService } from './siblings.service';

describe('SiblingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiblingsService]
    });
  });

  it('should be created', inject([SiblingsService], (service: SiblingsService) => {
    expect(service).toBeTruthy();
  }));
});
