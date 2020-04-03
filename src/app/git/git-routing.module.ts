import { NgModule } from '@angular/core';
import { GitFollowersComponent } from './git-followers/git-followers.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'followers',
        component: GitFollowersComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class GitRoutingModule {

}
