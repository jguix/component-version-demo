export interface FeatureVersionDictionary {
  [key: string]: number;
}

export interface CountryConfigDictionary {
  [key: string]: {
    features: FeatureVersionDictionary;
  };
}

export enum FeatureType {
  COUNTRY_HEADER = 'COUNTRY_HEADER',
  COUNTRY_CONTENT = 'COUNTRY_CONTENT'
}

export const DEFAULT_COUNTRY_CONFIG: CountryConfigDictionary = {
  'es': {
    features: {
      'COUNTRY_HEADER': 2,
      'COUNTRY_CONTENT': 2,
    }
  },
  'fr': {
    features: {
      'COUNTRY_HEADER': 2,
      'COUNTRY_CONTENT': 2,
    }
  },
  'it': {
    features: {
      'COUNTRY_HEADER': 2,
      'COUNTRY_CONTENT': 1,
    }
  },
  'uk': {
    features: {
      'COUNTRY_HEADER': 1,
    }
  }
};
