import { TestBed } from '@angular/core/testing';

import { UserRegServiceService } from './user-reg-service.service';

describe('UserRegServiceService', () => {
  let service: UserRegServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
