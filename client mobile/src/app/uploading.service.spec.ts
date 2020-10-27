import { TestBed } from '@angular/core/testing';

import { UploadingService } from './uploading.service';

describe('UploadingService', () => {
  let service: UploadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
