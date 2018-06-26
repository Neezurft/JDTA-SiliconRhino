import { TestBed, inject } from '@angular/core/testing';

import { GetfromapiService } from './getfromapi.service';

describe('GetfromapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetfromapiService]
    });
  });

  it('should be created', inject([GetfromapiService], (service: GetfromapiService) => {
    expect(service).toBeTruthy();
  }));
});
