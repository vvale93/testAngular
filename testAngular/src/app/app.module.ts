import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgPipesModule} from 'ngx-pipes';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPostsComponent } from './main-posts/main-posts.component';
import { PostComponent } from './post/post.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { BlogBodyComponent } from './blog-body/blog-body.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MainpostPostComponent } from './mainpost-post/mainpost-post.component';
import { RegisterComponent } from './register/register.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';

import { UserListService } from './user-list.service';
import { GetPostsService } from './get-posts.service';
import { CommentsService } from './comments.service';
import { PersonService } from './person.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPostsComponent,
    PostComponent,
    SideBarComponent,
    UserListComponent,
    BlogBodyComponent,
    AboutUsComponent,
    BlogFooterComponent,
    ContactUsComponent,
    AllPostsComponent,
    PostComponentComponent,
    UserProfileComponent,
    MainpostPostComponent,
    RegisterComponent,
    LoadingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpModule,
    NgbModule.forRoot(),
    NgPipesModule,
    NgxPaginationModule
  ],
  providers: [
    UserListService,
    GetPostsService, 
    CommentsService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
