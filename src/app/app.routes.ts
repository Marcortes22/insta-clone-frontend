import { Routes } from '@angular/router';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { HomeLayoutComponent } from '@layouts/home-layout/home-layout.component';
import { NotFoundPageComponent } from '@pages/not-found-page/not-found-page.component';
import { LoginPageComponent } from '@features/user/features/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from '@features/user/features/auth/pages/register-page/register-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { WelcomePageComponent } from './features/welcome/pages/welcome-page/welcome-page.component';

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
    path: 'welcome',
    loadComponent: () =>
      import('@layouts/welcome-layout/welcome-layout.component').then(
        m => m.WelcomeLayoutComponent,
      ),
    title: 'Welcome',
    children: [
      {
        path: '',
        component: WelcomePageComponent,
        title: 'Welcome home',
      },
      {
        path: 'explore',
        loadComponent: () =>
          import(
            '@features/welcome/pages/explore-page/explore-page.component'
          ).then(m => m.ExplorePageComponent),
        title: 'Explore',
      },
      {
        path: 'reels',
        loadComponent: () =>
          import(
            '@features/welcome/pages/reels-page/reels-page.component'
          ).then(m => m.ReelsPageComponent),
        title: 'Reels',
      },
      {
        path: 'search',
        loadComponent: () =>
          import(
            '@features/welcome/pages/search-page/search-page.component'
          ).then(m => m.SearchPageComponent),
        title: 'Search',
      },
      {
        path: 'profile',
        loadComponent: () =>
          import(
            '@features/welcome/pages/profile-page/profile-page.component'
          ).then(m => m.ProfilePageComponent),
        title: 'Profile',
      },
    ],
  },

  {
    // allways at the end
    path: '**',
    component: NotFoundPageComponent,
  },
];
