import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MainPostsComponent } from './main-posts/main-posts.component';
import { PostComponent } from './post/post.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LogUpFormComponent } from './log-up-form/log-up-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { BlogBodyComponent } from './blog-body/blog-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageHeaderComponent,
    MainPostsComponent,
    PostComponent,
    SideBarComponent,
    LogUpFormComponent,
    UserListComponent,
    BlogBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
