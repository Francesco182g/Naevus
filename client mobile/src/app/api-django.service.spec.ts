import { TestBed } from '@angular/core/testing';

import { ApiDjangoService } from './api-django.service';

describe('ApiDjangoService', () => {
  let service: ApiDjangoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDjangoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
