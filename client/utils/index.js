import { initQualScraper } from './factbook-scrape-controller';
import { initQuantScraper, polIndicators, socIndicators, econIndicators, geoIndicators } from './worldbank-scrape-controller';

function parseQuantValue(name, value) {
  if (name.includes('$')) {
    return value.includes('-') ?
     `-$${numberWithCommas(intToFloat(value.slice(1), 2))}` :
     `$${numberWithCommas(intToFloat(value, 2))}`;
  } else if (name.includes('%')) {
    return `${intToFloat(value, 2)}%`;
  }
  return `${numberWithCommas(intToFloat(value, 2))}`;
}

function numberWithCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function intToFloat(num, decPlaces) {
  const len = num.length;
  return num[len - 1] === 0 && num[len - 2] === 0 ?
    Number(num.slice(0, num.indexOf('.'))) :
    Number(num).toFixed(decPlaces);
}

module.exports = {
  initQualScraper,
  initQuantScraper,
  polIndicators,
  socIndicators,
  econIndicators,
  geoIndicators,
  parseQuantValue,
};
