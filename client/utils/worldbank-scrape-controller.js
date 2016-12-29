const $ = require('jquery');
const quantCountryData = {};

let polIndicators = [
  'IC.BUS.EASE.XQ',
  'SH.XPD.PCAP.PP.KD',
  'GB.XPD.RSDV.GD.ZS',
];

let econIndicators = [
  'NY.GDP.MKTP.CD',
  'NY.GDP.PCAP.PP.CD',
  'NY.GDP.MKTP.KD.ZG',
  'CM.MKT.TRAD.CD',
  'GC.BAL.CASH.GD.ZS',
  'BN.CAB.XOKA.CD',
  'SL.UEM.TOTL.NE.ZS',
  'SL.AGR.EMPL.ZS',
  'SL.IND.EMPL.ZS',
  'SL.SRV.EMPL.ZS',
  'BN.KLT.DINV.CD',
  'BN.TRF.KOGT.CD',
  'FI.RES.TOTL.CD', 
  'SN.ITK.DEFC.ZS',
  'IC.EXP.COST.CD',
  'IC.IMP.COST.CD'
];

let socIndicators = [
  'SP.POP.TOTL',
  'SP.POP.GROW',
  'SP.DYN.LE00.IN',
  'SP.DYN.TFRT.IN',
  'SH.STA.MMRT.NE',
  'IT.NET.USER.P2', 
  'IT.CEL.SETS.P2', 
  'SE.XPD.TOTL.GB.ZS', 
  'SE.ADT.LITR.ZS', 
  'SN.ITK.DEFC.ZS'
];

let geoIndicators = [
  'MS.MIL.TOTL.P1',
  'MS.MIL.XPND.ZS',
  'EN.CLC.MDAT.ZS',
  'EN.ATM.PM25.MC.ZS',
  'ST.INT.RCPT.CD',
  'VC.IDP.TOTL.HE',
  'SM.POP.NETM',
  'BX.TRF.PWKR.DT.GD.ZS',
  'BX.TRF.PWKR.CD.DT'
];

function initQuantScraper(countryCode) {
  console.log('initiating world bank scraping')
  if (quantCountryData.countryCode !== undefined) {
    return quantCountryData.countryCode;
  }
  return scrapeControllerQuant(countryCode);
}

function scrapeControllerQuant(countryCode) {
  const promisesArr = []
  const indicators = [
  'IC.BUS.EASE.XQ',
  'SH.XPD.PCAP.PP.KD',
  'GB.XPD.RSDV.GD.ZS',
  'NY.GDP.MKTP.CD',
  'NY.GDP.PCAP.PP.CD',
  'NY.GDP.MKTP.KD.ZG',
  'CM.MKT.TRAD.CD',
  'GC.BAL.CASH.GD.ZS',
  'BN.CAB.XOKA.CD',
  'SL.UEM.TOTL.NE.ZS',
  'SL.AGR.EMPL.ZS',
  'SL.IND.EMPL.ZS',
  'SL.SRV.EMPL.ZS',
  'BN.KLT.DINV.CD',
  'BN.TRF.KOGT.CD',
  'FI.RES.TOTL.CD', 
  'SN.ITK.DEFC.ZS',
  'IC.EXP.COST.CD',
  'IC.IMP.COST.CD',
  'SP.POP.TOTL',
  'SP.POP.GROW',
  'SP.DYN.LE00.IN',
  'SP.DYN.TFRT.IN',
  'SH.STA.MMRT.NE',
  'IT.NET.USER.P2', 
  'IT.CEL.SETS.P2', 
  'SE.XPD.TOTL.GB.ZS', 
  'SE.ADT.LITR.ZS', 
  'SN.ITK.DEFC.ZS',
  'MS.MIL.TOTL.P1',
  'MS.MIL.XPND.ZS',
  'EN.CLC.MDAT.ZS',
  'EN.ATM.PM25.MC.ZS',
  'ST.INT.RCPT.CD',
  'VC.IDP.TOTL.HE',
  'SM.POP.NETM',
  'BX.TRF.PWKR.DT.GD.ZS',
  'BX.TRF.PWKR.CD.DT'
  ]

indicators.forEach(indicator => {

  let promise = new Promise(function (resolve, reject) {
    $.ajax({
      type: "GET",
      contentType: "application/json",
      dataType: "jsonp",
      crossDomain: true,
      cache: true,
      jsonp: 'prefix',
      url: `http://api.worldbank.org/countries/${countryCode}/indicators/${indicator}?format=jsonP&prefix=?`,
    }).done(resolve).fail(reject);
});

  promisesArr.push(promise);
  });
quantCountryData[countryCode] = promisesArr;
return promisesArr;
}

module.exports = { initQuantScraper, polIndicators, socIndicators, econIndicators, geoIndicators };
