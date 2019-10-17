import { TestBed } from '@angular/core/testing';

import { UsersEditService } from './users-edit.service';

describe('UsersEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersEditService = TestBed.get(UsersEditService);
    expect(service).toBeTruthy();
  });
});
