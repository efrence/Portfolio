import { presetUno, presetAttributify } from 'unocss';
import { variantParentMatcher } from '@unocss/preset-mini/utils';

export default {
  presets: [presetUno(), presetAttributify()],
  theme: {
     breakpoints: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: 'var(--q-primary)',
      secondary: 'var(--q-secondary)',
      warning: '#F2C037',
      positive: '#21BA45',
      negative: '#C10015',
    },
    fontFamily: {
      opensans: ['"Open Sans"', 'sans-serif'],
    },
    height: {
      page: 'calc(100vh - 2rem - 50px)',
      'page-full': 'calc(100vh - 50px)',
    },
    maxHeight: {
      'page-full': 'calc(100vh - 50px)',
      'h-page': 'calc(100vh - 2rem - 50px)',
    },
  },
  rules: [
    ['hide', { display: 'none' }],
    [
      'bg-theme-gradient',
      {
        background:
          'linear-gradient(-45deg, var(--q-bg-first-stop), var(--q-bg-second-stop), var(--q-bg-third-stop), var(--q-bg-fourth-stop));',
      },
    ],
    ['orient-vertical', { '-webkit-box-orient': 'vertical' }],
    ['webkit-box', { display: '-webkit-box' }],
    ['font-courier-new', { 'font-family': '"Courier New"' }],
    ['bg-white-opacity', { 'background-color': 'rgba(255, 255, 255, 0.75)' }],
    [/^bg-size-(\d+)%$/, ([, d]) => ({ 'background-size': `${d}%` })],
    [
      /^ratio-(\d+)\/(\d+)$/,
      ([, num, den]) => ({ 'padding-bottom': `${(den / num) * 100}%` }),
    ],
    [/^h-(\d+)$/, ([, d]) => ({ height: `${d / 4}rem` })],
    [/^min-w-(\d+)$/, ([, d]) => ({ 'min-width': `${d / 2}rem` })],
    [/^max-w-(\d+)$/, ([, d]) => ({ 'max-width': `${d / 2}rem` })],
    [/^w-1\/(\d+)$/, ([, d]) => ({ width: `${100 / d}%` })],
    [
      /^anim-([\w]+)-(\d+)-([\w-]+)-([\w]+)$/,
      ([, name, secs, func, iteration]) => ({
        animation: `${name} ${secs}s ${func} ${iteration}`,
      }),
    ],
  ],
  shortcuts: [
    {
      header: 'text-2xl lg:text-3xl xl:text-4xl',
      title: 'text-lg lg:text-xl xl:text-2xl',
      text: 'text-base lg:text-lg xl:text-xl',
    },
  ],
};
