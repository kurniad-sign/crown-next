import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';





export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        'display-1': '6rem',
        'display-2': '4.5rem',
      },
      colors: {
        grey: {
          50: 'var(--grey-50)',
          75: 'var(--grey-75)',
          100: 'var(--grey-100)',
          200: 'var(--grey-200)',
          300: 'var(--grey-300)',
          400: 'var(--grey-400)',
          500: 'var(--grey-500)',
          600: 'var(--grey-600)',
          700: 'var(--grey-700)',
          800: 'var(--grey-800)',
          900: 'var(--grey-900)',
        },
        ['office-brown']: {
          50: 'var(--office-brown-50)',
          75: 'var(--office-brown-75)',
          100: 'var(--office-brown-100)',
          200: 'var(--office-brown-200)',
          300: 'var(--office-brown-300)',
          400: 'var(--office-brown-400)',
          500: 'var(--office-brown-500)',
          600: 'var(--office-brown-600)',
          700: 'var(--office-brown-700)',
          800: 'var(--office-brown-800)',
          900: 'var(--office-brown-900)',
        },
      },
      fontFamily: {
        'general-sans': 'var(--font-general-sans)',
        inter: 'var(--font-inter)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        'rayna-ui': {
          extend: 'light',
          colors: {
            background: '#f9fafb',
            foreground: '#101928',
            primary: {
              '50': '#ffece5',
              '100': '#fcb59a',
              '200': '#fa9874',
              '300': '#f77a4a',
              '400': '#f56630',
              '500': '#eb5017',
              '600': '#cc400c',
              '700': '#ad3307',
              '800': '#8f2802',
              '900': '#711e00',
              DEFAULT: '#f56630',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#1671d9',
              foreground: '#ffffff',
              50: '#e3effc',
              100: '#b6d8ff',
              200: '#80bbff',
              300: '#3d89df',
              400: '#1671d9',
              500: '#0d5eba',
              600: '#034592',
              700: '#04326b',
              800: '#012657',
              900: '#001633',
            },
            success: {
              DEFAULT: '#0f973d',
              foreground: '#ffffff',
              50: '#e7f6ec',
              100: '#91d6a8',
              200: '#5fc381',
              300: '#40b869',
              400: '#0f973d',
              500: '#099137',
              600: '#04802e',
              700: '#036b26',
              800: '#015b20',
              900: '#004617',
            },
            warning: {
              DEFAULT: '#f3a218',
              foreground: '#ffffff',
              50: '#fef6e7',
              100: '#f7d394',
              200: '#f7c164',
              300: '#f5b546',
              400: '#f3a218',
              500: '#dd900d',
              600: '#ad6f07',
              700: '#865503',
              800: '#664101',
              900: '#523300',
            },
            danger: {
              DEFAULT: '#d42620',
              foreground: '#ffffff',
              50: '#fbeae9',
              100: '#eb9b98',
              200: '#e26e6a',
              300: '#dd524d',
              400: '#d42620',
              500: '#cb1a14',
              600: '#ba110b',
              700: '#9e0a05',
              800: '#800501',
              900: '#591000',
            },
            focus: '#f56630',
            divider: '#98a2b3',
          },
          layout: {
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            disabledOpacity: '0.3',
          },
        },
      },
    }),
  ],
} satisfies Config;