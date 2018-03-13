export interface CountryConfig {
  [key: string]: {
    features: FeatureVersion;
  };
}

export interface FeatureVersion {
  [key: string]: number;
}

export const FEATURES = {
  COUNTRY_HEADER: 'COUNTRY_HEADER',
  COUNTRY_CONTENT: 'COUNTRY_CONTENT'
};

export const DEFAULT_COUNTRY_CONFIG: CountryConfig = {
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
