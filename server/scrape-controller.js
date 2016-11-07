const json = require('json-loader');
// const data = require('json!../factbook/us.json');

const initScraper = (countryCode) => {
  console.log('initiating scraping')
  let file = countryCode + '.json';
  let data = require('json!../factbook/' + file);
  let qualCountryData = {}
  qualCountryData.Pol = scrapeControllerPol(data);
  qualCountryData.Econ = scrapeControllerEcon(data);
  qualCountryData.Soc = scrapeControllerSoc(data);
  qualCountryData.Geo = scrapeControllerGeo(data);
  return qualCountryData;
}

const scrapeControllerPol = (data) => {
let output = [];

if (data['Government']['Government type'] !== undefined) {
  output.push({ name: 'Government Type', value: data['Government']['Government type']['text'] })
}

if (data['Government']['Administrative divisions'] !== undefined) {
  output.push({ name: 'Administrative Divisions', value: data['Government']['Administrative divisions']['text'] });
}

if (data['Government']['Constitution'] !== undefined) {
  output.push({ name: 'Constitution', value: data['Government']['Constitution']['text'] });
}

if (data['Government']['Legal system'] !== undefined) {
  output.push({ name: 'Legal System', value: data['Government']['Legal system']['text'] });
}

if (data['Government']['Executive branch']['chief of state'] !== undefined) {
  output.push({ name: 'Executive Branch', value: data['Government']['Executive branch']['chief of state']['text'] });
}

if (data['Government']['Executive branch']['head of government']  !== undefined) {
  output.push({ name: 'Executive Branch', value: data['Government']['Executive branch']['head of government']['text'] });
}

if (data['Government']['Legislative branch']['description']  !== undefined) {
  output.push({ name: 'Legislative Branch', value: data['Government']['Legislative branch']['description']['text'] });
}

if (data['Government']['Judicial branch']['highest court(s)']  !== undefined) {
  output.push({ name: 'Judicial Branch', value: data['Government']['Judicial branch']['highest court(s)']['text'] });
}

if (data['Government']['Political parties and leaders']  !== undefined) {
  output.push({ name: 'Political Parties and Leaders', value: data['Government']['Political parties and leaders']['text'] });
}

console.log('politics successfully parsed')
return output;
}

// QUALITATIVE ECONOMIC DATA FROM CIA WORLD FACTBOOK

const scrapeControllerEcon = (data) => {
let output = [];

if (data['Economy']['Economy - overview'] !== undefined) {
  output.push({ name: 'Economy - Overview', value: data['Economy']['Economy - overview']['text'] });
}

if (data['Geography']['Natural resources'] !== undefined) {
  output.push({ name: 'Natural Resources', value: data['Geography']['Natural resources']['text'] });
}

if (data['Economy']['Agriculture - products'] !== undefined) {
  output.push({ name: 'Agriculture - Products', value: data['Economy']['Agriculture - products']['text'] });
}

if (data['Economy']['Industries'] !== undefined) {
  output.push({ name: 'Industries', value: data['Economy']['Industries']['text'] });
}

if (data['Economy']['Exports - commodities'] !== undefined) {
  output.push({ name: 'Exports - Commodities', value: data['Economy']['Exports - commodities']['text'] });
}

if (data['Economy']['Imports - commodities'] !== undefined) {
  output.push({ name: 'Imports - Commodities', value: data['Economy']['Imports - commodities']['text'] });
}

if (data['Economy']['Public debt'] !== undefined) {
  output.push({ name: 'Public Debt', value: data['Economy']['Public debt']['text'] });
}

if (data['Transportation']['Ports and terminals']['cargo ports (tonnage)'] !== undefined) {
  output.push({ name: 'Ports and Terminals', value: data['Transportation']['Ports and terminals']['cargo ports (tonnage)']['text'] });
}

console.log('econ successfully parsed')

return output;
}

// QUALITATIVE SOCIAL DATA FROM CIA WORLD FACTBOOK

const scrapeControllerSoc = (data) => {
let output = [];

if (data['People and Society']['Ethnic groups'] !== undefined) {
  output.push({ name: 'People and Society', value: data['People and Society']['Ethnic groups']['text'] });
}

if (data['Government']['Political pressure groups and leaders']['other'] !== undefined) {
  output.push({ name: 'Political Pressure Groups and Leaders', value: data['Government']['Political pressure groups and leaders']['other']['text'] });
}

if (data['Communications']['Broadcast media'] !== undefined) {
  output.push({ name: 'Broadcast Media', value: data['Communications']['Broadcast media']['text'] });
}

console.log('soc successfully parsed')

return output;
}

// QUALITATIVE GEOPOLITICAL DATA FROM CIA WORLD FACTBOOK

const scrapeControllerGeo = (data) => {
let output = [];

if (data['Geography']['Location'] !== undefined) {
  output.push({ name: 'Location', value: data['Geography']['Location']['text'] });
}

if (data['Government']['Capital']['geographic coordinates'] !== undefined) {
  output.push({ name: 'Coordinates', value: data['Government']['Capital']['geographic coordinates']['text'] });
}

if (data['Military']['Military branches'] !== undefined) {
  output.push({ name: 'Military', value: data['Military']['Military branches']['text'] });
}

if (data['Transnational Issues']['Disputes - international'] !== undefined) {
  output.push({ name: 'Transnational Issues', value: data['Transnational Issues']['Disputes - international']['text'] });
}

if (data['Transnational Issues']['Refugees and internally displaced persons'] !== undefined) {
  output.push({ name: 'Refugees and Internally Displaced Persons', value: data['Transnational Issues']['Refugees and internally displaced persons']['refugees (country of origin)']['text'] });
}

if (data['Transnational Issues']['Illicit drugs'] !== undefined) {
  output.push({ name: 'Illicit Drugs', value: data['Transnational Issues']['Illicit drugs']['text'] });
}

if (data['Geography']['Natural hazards'] !== undefined) {
  output.push({ name: 'Natural Hazards', value: data['Geography']['Natural hazards']['text'] });
}

console.log('geo successfully parsed')

return output;
}

module.exports = { initScraper };
