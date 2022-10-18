import { mapValues } from 'lodash';
import Color from 'color';
import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto';

export type Theme<Config extends ThemeConfig> = {
  colors: Record<keyof Config['colors'], Shades>;
  spacing: Record<string, string | number>;
  rounding: Record<string, string | number>;
  breakpoints: Breakpoints;
  media: Breakpoints;
};

interface Shades {
  primary: string;
  light: string;
  dark: string;
  pale: string;
}

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Breakpoints = Record<Breakpoint, string>;

interface ThemeConfig {
  colors: Record<any, string>;
  spacing: Record<string, string | number>;
  rounding: Record<string, string | number>;
  breakpoints: Breakpoints;
}

const createTheme = <Config extends ThemeConfig>({ colors, spacing, rounding, breakpoints }: Config): Theme<Config> => {
  const calculatedColors = mapValues<Record<keyof Config['colors'], string>, Shades>(colors, value => {
    const color = Color(value);

    return {
      primary: value,
      dark: color.darken(0.1).hex(),
      light: color.lighten(0.4).hex(),
      pale: color.desaturate(0.2).lighten(0.4).hex(),
      superPale: color.desaturate(0.25).lighten(0.75).hex(),
    };
  });

  const media = mapValues<Breakpoints, string>(breakpoints, value => `@media ${value}`);

  return {
    colors: calculatedColors,
    breakpoints,
    spacing,
    rounding,
    media,
  };
};

export const theme = createTheme({
  colors: {
    brand: '#208CF0',
    purple: '#725BFF',
    gray: '#8A8A8A',
    success: '#33e544',
    warning: '#ffb300',
    error: '#EE3344',
    black: '#23262F',
    white: '#fcfcfc',
    focus: '#dddd',
  },
  spacing: {},
  rounding: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 20,
    '3xl': 24,
    '4xl': 28,
  },
  breakpoints: {
    xs: '(max-width: 480px)',
    sm: '(max-width: 576px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 992px)',
    xl: '(max-width: 1200px)',
    xxl: '(max-width: 1400px)',
  },
});

export type AppTheme = typeof theme;

export const GlobalStyle = createGlobalStyle({
  '*': {
    fontFamily: 'Roboto',
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
});
