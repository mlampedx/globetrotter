// const json = require('json-loader');

const initQuantScraper = (countryCode) => {
  console.log('initiating world bank scraping')
  let quantCountryData = {}
  // let queryString = `http://api.worldbank.org/countries/${countryCode}/indicators/${socIndicators[i]}?format=json`;

  // return scrapeControllerPol(queryString)
  // quantCountryData.Pol = scrapeControllerPol(data);
  // quantCountryData.Econ = scrapeControllerEcon(data);
  quantCountryData.Soc = scrapeControllerSoc(countryCode);
  // quantCountryData.Geo = scrapeControllerGeo(data);
  return quantCountryData;
}

let scrapeControllerSoc = (countryCode) => {
let output = [];
let socIndicators = ['SP.POP.TOTL'];
let data;

  socIndicators.forEach(indicator => {
    let req = new Request(`http://api.worldbank.org/countries/${countryCode}/indicators/${indicator}?format=json`);
    req.mode = 'no-cors';
    fetch(req).then(res => data = res.json());

    if (data !== undefined) {
      output.push({ name: data[1][0].indicator.value,
                    value: data[1][0].value,
                    year: data[1][0].date,
                    country: data[1][0].country.value });

      data = undefined;
    }

 }); 

return output;
}

module.exports = { initQuantScraper };