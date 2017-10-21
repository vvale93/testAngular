import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { FormsModule } from '@angular/forms'; 
import { UserListService } from './user-list.service';
import { HttpModule } from '@angular/http';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { GetPostsService } from './get-posts.service';

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
    ContactUsComponent,
    AllPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    UserListService,
    GetPostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
