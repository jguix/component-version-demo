/**
 * First 4 fields are required, since they were included in version 1 of the components
 * Last 2 fields were added in version 2, consequently they are optional
 */
export interface Country {
  name: string;
  code: string;
  area: number;
  population: number;
  capital?: string;
  anthemURL?: string;
}

export const DEFAULT_COUNTRY_LIST: Array<Country> = [{
  code: 'es',
  name: 'Spain',
  area: 505370,
  population: 46549045,
  capital: 'Madrid',
  anthemURL: '/assets/audio/es.mp3',
}, {
  code: 'fr',
  name: 'France',
  area: 643801,
  population: 67158000,
  capital: 'Paris',
  anthemURL: '/assets/audio/fr.mp3',
}, {
  code: 'it',
  name: 'Italy',
  area: 301340,
  population: 60665551,
  capital: 'Roma',
  anthemURL: '/assets/audio/it.mp3',
}, {
  code: 'pt',
  name: 'Portugal',
  area: 92090,
  population: 10562178,
  capital: 'Lisboa',
  anthemURL: '/assets/audio/pt.mp3',
}, {
  code: 'uk',
  name: 'United Kingdom',
  area: 243610,
  population: 65217975,
  capital: 'London',
  anthemURL: '/assets/audio/uk.mp3',
}];
