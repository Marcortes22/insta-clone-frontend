import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page-mobile',
  imports: [],
  templateUrl: './register-page-mobile.component.html',
  styleUrl: './register-page-mobile.component.css',
})
export class RegisterPageMobileComponent {
  private router = inject(Router);

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
