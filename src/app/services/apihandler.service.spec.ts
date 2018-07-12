import { TestBed, inject } from '@angular/core/testing';

import { ApihandlerService } from './apihandler.service';

describe('ApihandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApihandlerService]
    });
  });

  it('should be created', inject([ApihandlerService], (service: ApihandlerService) => {
    expect(service).toBeTruthy();
  }));
});
