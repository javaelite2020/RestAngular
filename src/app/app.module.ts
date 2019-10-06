import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UsersGetComponent} from './users-get/users-get.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

import {CarouselModule} from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import {LoginService} from './Services/login.service';
import {ProductsService} from './Services/products.service';

const routes: Routes = [
  {
    path: 'user/create',
    component: UserAddComponent
  },
  {
    path: 'users',
    component: UsersGetComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UsersGetComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    NgxPaginationModule
  ],
  exports: [RouterModule],
  providers: [ProductsService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
