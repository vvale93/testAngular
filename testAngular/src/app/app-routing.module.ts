import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from '../app/post/post.component';
import { BlogBodyComponent } from '../app/blog-body/blog-body.component';
import { UserListComponent } from '../app/user-list/user-list.component';
import { AboutUsComponent } from '../app/about-us/about-us.component';
import { ContactUsComponent } from '../app/contact-us/contact-us.component';
import { AllPostsComponent } from '../app/all-posts/all-posts.component'

const routes: Routes = [
  { path: '', component: BlogBodyComponent },
 /* { path: 'post', component: PostComponent },*/
  { path: 'userList', component: UserListComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'posts', component: AllPostsComponent }
  /*{ path: '**', component: ErrorComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
