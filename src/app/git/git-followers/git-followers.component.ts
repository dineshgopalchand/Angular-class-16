import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GitFollowersService, GitFollowers } from '../services/git-followers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-git-followers',
  templateUrl: './git-followers.component.html',
  styleUrls: ['./git-followers.component.scss']
})
export class GitFollowersComponent implements OnInit {
  @ViewChild('newUsername', { static: true }) newusername: ElementRef;
  followersList: GitFollowers[] = [];
  errors = '';
  defaultUserName = 'dineshgopalchand';

  constructor(
    public gitFollowersService: GitFollowersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    // example of snapshot
    const usernameSnap = this.route.snapshot.paramMap.get('username');
    console.log(usernameSnap);
    // this.route.paramMap
    //   .subscribe(params => {
    //     console.log(params);
    //     const username = params.get('username');
    //     if (!username) {
    //       this.userSearch(this.defaultUserName);
    //     }
    //     const userid = params.get('userid');
    //     this.updateUsername(username);
    //   });
    // this.route.queryParamMap
    //   .subscribe(queryParams => {
    //     console.log(queryParams);
    //     const pageno = queryParams.get('page');
    //     const noperpage = queryParams.get('noperpage');
    //   });

    combineLatest(
      this.route.paramMap,
      this.route.queryParamMap
    ).pipe(
      switchMap(params => {
        const username = params[0].get('username');
        if (!username) {
          this.userSearch(this.defaultUserName);
        }
        const userid = params[0].get('userid');
        const pageno = params[1].get('page');
        const noperpage = params[1].get('noperpage');
        return Observable.create(observer => {
          observer.next(username);
          console.log({ username });
          observer.complete();
        });
      })
    )
      .subscribe(username => {
        this.updateUsername(username as string);
      });
    // this.getFollowerList();
  }
  updateUsername(value: string) {
    // console.log(this.newusername);
    // this.gitFollowersService.username = (this.newusername.nativeElement as HTMLInputElement).value;
    this.gitFollowersService.username = value;
    this.getFollowerList();
  }
  userSearch(value: string) {
    this.router.navigate(['/git', 'followers', value]);
  }
  getFollowerList() {
    this.gitFollowersService.getAll().toPromise()
      .then(res => {
        this.errors = '';
        this.followersList = res as GitFollowers[];
      })
      .catch(err => {
        this.errors = 'some error';
        this.followersList = [] as GitFollowers[];
      });
  }

}
