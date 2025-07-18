import { Component, inject } from '@angular/core';
import { LoginPageDesktopComponent } from './login-page-desktop/login-page-desktop.component';
import { LoginPageMobileComponent } from './login-page-mobile/login-page-mobile.component';
import { IS_MOBILE } from '@app/core/constants/device-type.token';
@Component({
  selector: 'app-login-page',
  imports: [LoginPageDesktopComponent, LoginPageMobileComponent],
  template: `@if (isMobile) {
      <app-login-page-mobile />
    } @else {
      <app-login-page-desktop />
    }`,
})
export class LoginPageComponent {
  isMobile: boolean = inject(IS_MOBILE);
}
