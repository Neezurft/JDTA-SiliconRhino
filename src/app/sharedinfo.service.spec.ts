import { TestBed, inject } from '@angular/core/testing';

import { SharedinfoService } from './sharedinfo.service';

describe('SharedinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedinfoService]
    });
  });

  it('should be created', inject([SharedinfoService], (service: SharedinfoService) => {
    expect(service).toBeTruthy();
  }));
});
