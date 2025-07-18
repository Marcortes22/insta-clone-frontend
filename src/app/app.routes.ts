import { Routes } from '@angular/router';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { HomeLayoutComponent } from '@layouts/home-layout/home-layout.component';
import { NotFoundPageComponent } from '@pages/not-found-page/not-found-page.component';
import { LoginPageComponent } from '@features/user/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from '@features/user/auth/pages/register-page/register-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomePageComponent,
        title: 'Home Page',
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginPageComponent,
        title: 'Login',
      },
      {
        path: 'register',
        component: RegisterPageComponent,
        title: 'Register',
      },
    ],
  },
  {
    // allways at the end
    path: '**',
    component: NotFoundPageComponent,
  },
];
