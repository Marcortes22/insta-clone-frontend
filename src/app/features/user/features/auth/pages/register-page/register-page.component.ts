import { Component, inject } from '@angular/core';
import { RegisterPageDesktopComponent } from './register-page-desktop/register-page-desktop.component';
import { RegisterPageMobileComponent } from './register-page-mobile/register-page-mobile.component';
import { IS_MOBILE } from '@app/core/constants/device-type.token';

@Component({
  selector: 'app-register-page',
  imports: [RegisterPageDesktopComponent, RegisterPageMobileComponent],
  template: `@if (isMobile) {
      <app-register-page-mobile />
    } @else {
      <app-register-page-desktop />
    } `,
})
export class RegisterPageComponent {
  isMobile: boolean = inject(IS_MOBILE);
}
