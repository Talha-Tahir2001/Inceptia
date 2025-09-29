// style-preset.ts
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const StylePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}',
    },
    surface: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}',
    },
    brand: {
      50: '{zinc.400}',
      100: '{zinc.500}',
      200: '{zinc.600}',
      300: '{zinc.700}',
      400: '{zinc.800}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.950}',
          inverseColor: '#fff',
          hoverColor: '{primary.900}',
          activeColor: '{primary.800}',
        },
        highlight: {
          background: '{primary.950}',
          focusBackground: '{primary.700}',
          color: '#fff',
          focusColor: '#fff',
        },
        brand: { color: '{brand.400}', background: '{brand.100}' },
      },
      dark: {
        primary: {
          color: '{zinc.50}',
          inverseColor: '{primary.950}',
          hoverColor: '{zinc.100}',
          activeColor: '{zinc.200}',
        },
        highlight: {
          background: 'rgba(250,250,250, .16)',
          focusBackground: 'rgba(250,250,250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
        brand: { color: '{brand.100}', background: '{brand.400}' },
      },
    },
  },
  components: {
    card: {
      colorScheme: {
        light: {
          root: {
            background: '{surface.0}',
            color: '{surface.700}',
          },
          subtitle: {
            color: '{surface.500}',
          },
        },
        dark: {
          root: {
            background: '{surface.900}',
            color: '{surface.0}',
          },
          subtitle: {
            color: '{surface.400}',
          },
        },
      },
    },
  },
  // components: {
  //   button: {
  //     background: '{primary.600}', hoverBackground: '{primary.700}', color: '{primary.color}'
  //   },
  //   inputtext: {
  //     background: '{surface.100}', color: '{surface.950}'
  //   },
  //   tabs: {
  //     tab: { color: '{primary.color}', activeColor: '{primary.color}' }
  //   }
  // },
  css: `
    /* Removes shadow from PrimeNG buttons in dark mode */
    .my-app-dark .p-button {
      box-shadow: none;
    }
  `,
});
