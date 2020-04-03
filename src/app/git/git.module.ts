import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitFollowersComponent } from './git-followers/git-followers.component';
import { GitFollowersService } from './services/git-followers.service';
import { GitRoutingModule } from './git-routing.module';

@NgModule({
  declarations: [GitFollowersComponent],
  imports: [
    CommonModule,
    GitRoutingModule
  ],
  providers: [
    GitFollowersService
  ]
})
export class GitModule { }
