import { TestBed } from '@angular/core/testing';

import { GitFollowersService } from './git-followers.service';

describe('GitFollowersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitFollowersService = TestBed.get(GitFollowersService);
    expect(service).toBeTruthy();
  });
});
