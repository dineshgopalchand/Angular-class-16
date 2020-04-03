import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ToDoListComponent } from './forms/to-do-list/to-do-list.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'git',
    loadChildren: () => import('./git/git.module').then(m => m.GitModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
