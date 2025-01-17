import { TestBed } from '@angular/core/testing';

import { IncidentHttpService } from './incident-http.service';

describe('IncidentHttpService', () => {
  let service: IncidentHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
