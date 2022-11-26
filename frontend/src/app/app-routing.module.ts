import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewbookComponent } from './pages/newbook/newbook.component';
import { SignComponent } from './pages/sign/sign.component';
import { UpdatabookComponent } from './pages/updatabook/updatabook.component';



const routes: Routes = [
  {path:'',component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignComponent },
  { path: 'books', component: BooksComponent },
  { path: 'addbook', component: NewbookComponent },
  { path: 'edit/:id', component: UpdatabookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
