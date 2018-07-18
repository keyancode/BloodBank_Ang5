import { TestBed, inject } from '@angular/core/testing';

import { DonarAPIService } from './donar-api.service';

describe('DonarAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonarAPIService]
    });
  });

  it('should be created', inject([DonarAPIService], (service: DonarAPIService) => {
    expect(service).toBeTruthy();
  }));
});
