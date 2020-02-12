import { TestBed } from '@angular/core/testing';

import { IntentsServiceService } from './intents-service.service';

describe('IntentsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntentsServiceService = TestBed.get(IntentsServiceService);
    expect(service).toBeTruthy();
  });
});
