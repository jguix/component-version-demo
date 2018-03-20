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
  anthemURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Marcha_Real-Royal_March_by_US_Navy_Band.ogg',
}, {
  code: 'fr',
  name: 'France',
  area: 643801,
  population: 67158000,
  capital: 'Paris',
  anthemURL: 'https://upload.wikimedia.org/wikipedia/commons/3/30/La_Marseillaise.ogg',
}, {
  code: 'it',
  name: 'Italy',
  area: 301340,
  population: 60665551,
  capital: 'Roma',
  anthemURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/National_anthem_of_Italy_-_U.S._Navy_Band_%28long_version%29.ogg',
}, {
  code: 'pt',
  name: 'Portugal',
  area: 92090,
  population: 10562178,
  capital: 'Lisboa',
  anthemURL: 'https://upload.wikimedia.org/wikipedia/commons/5/58/A_Portuguesa.ogg',
}, {
  code: 'uk',
  name: 'United Kingdom',
  area: 243610,
  population: 65217975,
  capital: 'London',
  anthemURL: 'https://upload.wikimedia.org/wikipedia/commons/d/de/United_States_Navy_Band_-_God_Save_the_Queen.ogg',
}];
