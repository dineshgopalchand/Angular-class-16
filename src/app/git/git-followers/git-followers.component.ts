import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GitFollowersService, GitFollowers } from '../services/git-followers.service';

@Component({
  selector: 'app-git-followers',
  templateUrl: './git-followers.component.html',
  styleUrls: ['./git-followers.component.scss']
})
export class GitFollowersComponent implements OnInit {
  @ViewChild('newUsername', { static: true }) newusername: ElementRef;
  followersList: GitFollowers[] = [];

  constructor(public gitFollowersService: GitFollowersService) { }

  ngOnInit() {
    this.getFollowerList();
  }
  updateUsername(value: string) {
    // console.log(this.newusername);
    // this.gitFollowersService.username = (this.newusername.nativeElement as HTMLInputElement).value;
    this.gitFollowersService.username = value;
    this.getFollowerList();
  }
  getFollowerList() {
    this.gitFollowersService.getAll().toPromise()
      .then(res => {
        this.followersList = res as GitFollowers[];
      }).catch(err => {
        this.followersList = [] as GitFollowers[];
      });
  }

}
