import {
  inject,
  Provider,
  makeStateKey,
  TransferState,
  REQUEST,
} from '@angular/core';

import { IS_MOBILE } from './device-type.token';

function detectMobileByUserAgent(userAgent: string): boolean {
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(userAgent);
}
const MOBILE_STATE_KEY = makeStateKey<boolean>('is-mobile');

// This provider checks if the request is from a mobile device from the server-side
// and stores the result in TransferState keep it after the hydration process

export const deviceDetectionProvider: Provider = {
  provide: IS_MOBILE,
  useFactory: () => {
    const transferState = inject(TransferState, { optional: true });
    const req = inject(REQUEST, { optional: true });

    // SSR: Detect mobile device from user agent (ssr) and store in TransferState
    if (req && req.headers && transferState) {
      const userAgentString = req.headers.get('user-agent') || '';
      const isMobile = detectMobileByUserAgent(userAgentString);
      transferState.set(MOBILE_STATE_KEY, isMobile);
      return isMobile;
    }

    // Client: transferState is used to retrieve the value
    if (transferState && transferState.hasKey(MOBILE_STATE_KEY)) {
      return transferState.get(MOBILE_STATE_KEY, false);
    }

    // if no TransferState is available, default to false
    return false;
  },
};
