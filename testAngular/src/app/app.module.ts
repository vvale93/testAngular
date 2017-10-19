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
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

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
    BlogBodyComponent,
    AboutUsComponent,
    BlogFooterComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
