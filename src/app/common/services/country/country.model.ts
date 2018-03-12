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
  anthemURL: 'http://www.nationalanthems.info/es.mp3',
}, {
  code: 'fr',
  name: 'France',
  area: 643801,
  population: 67158000,
  capital: 'Paris',
  anthemURL: 'http://www.nationalanthems.info/fr.mp3',
}, {
  code: 'it',
  name: 'Italy',
  area: 301340,
  population: 60665551,
  capital: 'Roma',
  anthemURL: 'http://www.nationalanthems.info/it.mp3',
}];
