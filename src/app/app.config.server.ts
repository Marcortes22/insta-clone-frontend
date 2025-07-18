import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { deviceDetectionProvider } from './core/constants/device-type.provider';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    deviceDetectionProvider,
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
