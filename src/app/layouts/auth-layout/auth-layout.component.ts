import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IS_MOBILE } from '@app/core/constants/device-type.token';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {
  isMobile: boolean = inject(IS_MOBILE);
}
