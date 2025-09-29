import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { StylePreset } from '../style-preset';
import { ThemeService } from './services/theme-service';

export const appConfig: ApplicationConfig = {
  providers: [
    ThemeService,
    provideAppInitializer(() => {
      const themeService = inject(ThemeService).init();
    }),
    provideAnimationsAsync(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: StylePreset,
        options: {
          // prefix: 'p',
          darkModeSelector: '.my-app-dark',
          cssLayer: false,
        },
      },
    }),
  ],
};
