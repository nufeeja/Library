import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksComponent } from './pages/books/books.component';
import { NewbookComponent } from './pages/newbook/newbook.component';
import { ApiService } from './api.service';
import { LoginApiService } from './login-api.service';
import { SignComponent } from './pages/sign/sign.component';
import { UpdatabookComponent } from './pages/updatabook/updatabook.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
   
    NavbarComponent,
    BooksComponent,
    NewbookComponent,
    SignComponent,
    UpdatabookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ApiService,LoginApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
