const json = require('json-loader');

const qualCountryData = {};

const initQualScraper = (countryCode) => {
  if (qualCountryData.countryCode !== undefined) {
    return qualCountryData.countryCode;
  }
  qualCountryData.countryCode = {};
  const file = countryCode + '.json';
  const data = require('json!../../factbook/' + file);
  qualCountryData.countryCode.pol = scrapeControllerPol(data);
  qualCountryData.countryCode.econ = scrapeControllerEcon(data);
  qualCountryData.countryCode.soc = scrapeControllerSoc(data);
  qualCountryData.countryCode.geo = scrapeControllerGeo(data);
  return qualCountryData.countryCode;
};

const scrapeControllerPol = (data) => {
  const output = [];

  if (data['Government']['Government type'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Political', name: 'Government Type', value: data['Government']['Government type']['text'], year: 2016 });
  }

  if (data['Government']['Administrative divisions'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Political', name: 'Administrative Divisions', value: data['Government']['Administrative divisions']['text'], year: 2016 });
  }

  if (data['Government']['Constitution'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Political', name: 'Constitution', value: data['Government']['Constitution']['text'], year: 2016 });
  }

  if (data['Government']['Legal system'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Political', name: 'Legal System', value: data['Government']['Legal system']['text'], year: 2016 });
  }

  if (data['Government']['Executive branch']['chief of state'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Political', name: 'Executive Branch', value: data['Government']['Executive branch']['chief of state']['text'], year: 2016 });
  }

  if (data['Government']['Executive branch']['head of government'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Political', name: 'Executive Branch', value: data['Government']['Executive branch']['head of government']['text'], year: 2016 });
  }

  if (data['Government']['Legislative branch']['description'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Political', name: 'Legislative Branch', value: data['Government']['Legislative branch']['description']['text'], year: 2016 });
  }

  if (data['Government']['Judicial branch']['highest court(s)'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Political', name: 'Judicial Branch', value: data['Government']['Judicial branch']['highest court(s)']['text'], year: 2016 });
  }

  if (data['Government']['Political parties and leaders'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Political', name: 'Political Parties and Leaders', value: data['Government']['Political parties and leaders']['text'], year: 2016 });
  }

  return output;
};

// QUALITATIVE ECONOMIC DATA FROM CIA WORLD FACTBOOK

const scrapeControllerEcon = (data) => {
  const output = [];

  if (data['Economy']['Economy - overview'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Economic', name: 'Economy - Overview', value: data['Economy']['Economy - overview']['text'], year: 2016 });
  }

  if (data['Geography']['Natural resources'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Economic', name: 'Natural Resources', value: data['Geography']['Natural resources']['text'], year: 2016 });
  }

  if (data['Economy']['Agriculture - products'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Economic', name: 'Agriculture - Products', value: data['Economy']['Agriculture - products']['text'], year: 2016 });
  }

  if (data['Economy']['Industries'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Economic', name: 'Industries', value: data['Economy']['Industries']['text'], year: 2016 });
  }

  if (data['Economy']['Exports - commodities'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Economic', name: 'Exports - Commodities', value: data['Economy']['Exports - commodities']['text'], year: 2016 });
  }

  if (data['Economy']['Imports - commodities'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Economic', name: 'Imports - Commodities', value: data['Economy']['Imports - commodities']['text'], year: 2016 });
  }

  if (data['Economy']['Public debt'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Economic', name: 'Public Debt', value: data['Economy']['Public debt']['text'], year: 2016 });
  }

  if (data['Transportation']['Ports and terminals'] !== undefined) {
    if (data['Transportation']['Ports and terminals']['cargo ports (tonnage)'] !== undefined) {
      output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Economic', name: 'Ports and Terminals', value: data['Transportation']['Ports and terminals']['cargo ports (tonnage)']['text'], year: 2016 });
    }
  }

  return output;
};

// QUALITATIVE SOCIAL DATA FROM CIA WORLD FACTBOOK

const scrapeControllerSoc = (data) => {
  const output = [];

  if (data['People and Society']['Ethnic groups'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Societal', name: 'People and Society', value: data['People and Society']['Ethnic groups']['text'], year: 2016 });
  }

  if (data['Government']['Political pressure groups and leaders'] !== undefined) {
    if (data['Government']['Political pressure groups and leaders']['other'] !== undefined) {
      output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Societal', name: 'Political Pressure Groups and Leaders', value: data['Government']['Political pressure groups and leaders']['other']['text'], year: 2016 });
    }
  }

  if (data['Communications']['Broadcast media'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Societal', name: 'Broadcast Media', value: data['Communications']['Broadcast media']['text'], year: 2016 });
  }

  return output;
};

// QUALITATIVE GEOPOLITICAL DATA FROM CIA WORLD FACTBOOK

const scrapeControllerGeo = (data) => {
  const output = [];

  if (data['Geography']['Location'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Geopolitical', name: 'Location', value: data['Geography']['Location']['text'], year: 2016 });
  }

  if (data['Government']['Capital']['geographic coordinates'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Geopolitical', name: 'Coordinates', value: data['Government']['Capital']['geographic coordinates']['text'], year: 2016 });
  }

  if (data['Military']['Military branches'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Geopolitical', name: 'Military', value: data['Military']['Military branches']['text'], year: 2016 });
  }

  if (data['Transnational Issues']['Disputes - international'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Geopolitical', name: 'Transnational Issues', value: data['Transnational Issues']['Disputes - international']['text'], year: 2016 });
  }

  if (data['Transnational Issues']['Refugees and internally displaced persons'] !== undefined) {
    if (data['Transnational Issues']['Refugees and internally displaced persons']['refugees (country of origin)'] !== undefined) {
      output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Geopolitical', name: 'Refugees and Internally Displaced Persons', value: data['Transnational Issues']['Refugees and internally displaced persons']['refugees (country of origin)']['text'], year: 2016 });
    }
  }

  if (data['Transnational Issues']['Illicit drugs'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Geopolitical', name: 'Illicit Drugs', value: data['Transnational Issues']['Illicit drugs']['text'], year: 2016 });
  }

  if (data['Geography']['Natural hazards'] !== undefined) {
    output.push({ country: data['Government']['Country name']['conventional short form']['text'], type: 'Qualitative', category: 'Geopolitical', name: 'Natural Hazards', value: data['Geography']['Natural hazards']['text'], year: 2016 });
  }

  return output;
};

module.exports = { initQualScraper };
