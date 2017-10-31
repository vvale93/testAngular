import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from '../app/post/post.component';
import { BlogBodyComponent } from '../app/blog-body/blog-body.component';
import { UserListComponent } from '../app/user-list/user-list.component';
import { AboutUsComponent } from '../app/about-us/about-us.component';
import { ContactUsComponent } from '../app/contact-us/contact-us.component';
import { AllPostsComponent } from '../app/all-posts/all-posts.component'
import { PostComponentComponent } from '../app/post-component/post-component.component'
import { UserProfileComponent } from '../app/user-profile/user-profile.component'
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: BlogBodyComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'posts', component: AllPostsComponent },
  { path: 'post/:id', component: PostComponentComponent },
  { path: 'user/:id', component: UserProfileComponent },
  { path: 'registro', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: BlogBodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
