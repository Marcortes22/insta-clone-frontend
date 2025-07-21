import { Component, inject, signal } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page-mobile',
  imports: [],
  templateUrl: './login-page-mobile.component.html',
  styleUrl: './login-page-mobile.component.css',
})
export class LoginPageMobileComponent {
  private router = inject(Router);

  navigateToRegister() {
    this.router.navigate(['/auth/register']);
  }
  showPassword = signal(false);

  togglePasswordVisibility = () => {
    this.showPassword.update(prev => !prev);
  };
}
