import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule }         from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UserbyidComponent } from './userbyid/userbyid.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  imports: [
    BrowserModule,
    
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'quotes', component: QuoteComponent},
      {path: 'users/:id', component: UserbyidComponent},
      {path: 'users', component: PostsComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    UserbyidComponent,
    QuoteComponent
    
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}