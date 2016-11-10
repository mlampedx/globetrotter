function updateCategory(category) {
  return {
    type: 'UPDATE CATEGORY',
    category
  };
}

function updateCountry(event) {
  return {
    type: 'UPDATE COUNTRY',
    event
  };
}

function updateQualData(qualCountryData) {
  return {
    type: 'UPDATE QUAL DATA',
    qualCountryData
  };
}

export default { updateCategory, updateCountry, updateQualData };