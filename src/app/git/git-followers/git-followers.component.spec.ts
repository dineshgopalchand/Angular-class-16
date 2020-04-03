import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFollowersComponent } from './git-followers.component';

describe('GitFollowersComponent', () => {
  let component: GitFollowersComponent;
  let fixture: ComponentFixture<GitFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
