import { buildLegacyTheme } from 'sanity'

const props = {
  '--my-white': '#FFF',
  '--my-black': '#0D0000',
  '--brand': '#A2BCE8',
  '--my-red': '#FFBFFE',
  '--my-yellow': '#FCFFB3',
  '--my-green': '#C2FFCF',
}

export const myTheme = buildLegacyTheme({
  // Base theme colors
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  '--brand-primary': props['--brand'],

  '--default-button-color': '#666',
  '--default-button-primary-color': props['--brand'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  '--state-info-color': props['--brand'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--brand'],
})
