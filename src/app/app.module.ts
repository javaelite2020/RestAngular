import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UsersGetComponent} from './users-get/users-get.component';
import {ProductsService} from './Services/products.service';
import {LoginComponent} from './login/login.component';
import {LoginService} from './Services/login.service';
import {CarouselModule} from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';

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
    BrowserAnimationsModule,
    CarouselModule
  ],
  exports: [RouterModule],
  providers: [ProductsService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
