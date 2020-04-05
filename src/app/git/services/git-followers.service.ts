import { Injectable } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GitFollowersService extends DataService {
  userName: string;
  constructor(http: HttpClient) {
    const url = 'https://api.github.com/users/dineshgopalchand/followers';
    super(http, url);
    // this.userName = 'dineshgopalchand';
  }
  set username(user: string) {
    this.userName = user;
    this.url = `https://api.github.com/users/${user}/followers`;
    // console.log(this.url);
  }
  get username() {
    return this.userName;
  }
}
export interface GitFollowers {
    'login': string;
    'id': number;
    'node_id': string;
    'avatar_url': string;
    'gravatar_id': string;
    'url': string;
    'html_url': string;
    'followers_url': string;
    'following_url': string;
    'gists_url': string;
    'starred_url': string;
    'subscriptions_url': string;
    'organizations_url': string;
    'repos_url': string;
    'events_url': string;
    'received_events_url': string;
    'type': string;
    'site_admin': boolean;
}
