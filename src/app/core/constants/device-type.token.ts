import { InjectionToken } from '@angular/core';

export const IS_MOBILE = new InjectionToken<boolean>(
  'Server-side check for mobile device',
);
