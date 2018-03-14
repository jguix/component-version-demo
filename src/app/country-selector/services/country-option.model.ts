export interface CountryOption {
  name: string;
  code: string;
}

export const DEFAULT_COUNTRY_OPTION_LIST: Array<CountryOption> = [{
  code: 'es',
  name: 'Spain',
}, {
  code: 'fr',
  name: 'France',
}, {
  code: 'it',
  name: 'Italy',
}, {
  code: 'pt',
  name: 'Portugal',
}, {
  code: 'uk',
  name: 'United Kingdom',
}];
