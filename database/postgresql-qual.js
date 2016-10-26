// 'use strict'

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('postgresql-qual', 'michael', 'LHT1869EO1710', {
//   host: 'localhost',
//   dialect: 'postgres'
// });


// const PoliticsQual = sequelize.define('PoliticsQual', {
// indexes: [
//   {
//   country: { type: Sequelize.STRING, allowNull: false },
//   capitalCoords: { type: Sequelize.STRING, allowNull: true },
//   countrycode: { type: Sequelize.STRING, allowNull: false },
//   _id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
//   },
//   {
//   'Government Type': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Government Type' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Administrative Divisions': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Administrative Divisions' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Constitution': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Constitution' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Legal System': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Legal System' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Executive Branch': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Executive Branch' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Legislative Branch': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Legislative Branch' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Judicial Branch': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Judicial Branch' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Political Parties and Leaders': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Political Parties and Leaders' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
// ]
// });

// const EconomicsQual = sequelize.define('EconomicsQual', {
// indexes: [
//   {
//   country: { type: Sequelize.STRING, allowNull: false },
//   countrycode: { type: Sequelize.STRING, allowNull: false },
//   _id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
//   },
//   {
//   'Economy - Overview': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Economy - Overview' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Natural Resources': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Natural Resources' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Agriculture - Products': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Agriculture - Products' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Industries': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Industries' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Exports - Commodities': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Exports - Commodities' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Imports - Commodities': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Imports - Commodities' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Public Debt': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Public Debt' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Ports and Terminals': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Ports and Terminals' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Ports (Tonnage)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Ports (Tonnage)' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
// ]
// });

// const SocietyQual = sequelize.define('SocietyQual', {
// indexes: [
//   {
//   country: { type: Sequelize.STRING, allowNull: false },
//   countrycode: { type: Sequelize.STRING, allowNull: false },
//   _id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
//   },
//   {
//   'People and Society': { type: Sequelize.STRING, allowNull: false, defaultValue: 'People and Society' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Political Pressure Groups and Leaders': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Political Pressure Groups and Leaders' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Broadcast Media': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Broadcast Media' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
  // {
  // '': { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  // value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
  // },
  // {
  // '': { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  // value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
  // },
  // {
  // '': { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  // value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
  // },
  // {
  // '': { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  // value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
  // },
  // {
  // '': { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  // value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
  // },
  // {
  // '': { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  // value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
  // }
// ]
// });

// const GeopoliticsQual = sequelize.define('GeopoliticsQual', {
// indexes: [
//   {
//   country: { type: Sequelize.STRING, allowNull: false },
//   countrycode: { type: Sequelize.STRING, allowNull: false },
//   _id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
//   },
//   {
//   'Military': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Military' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Transnational Issues': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Transnational Issues' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Refugees and Internally Displaced Persons': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Refugees and Internally Displaced Persons' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Illicit Drugs': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Illicit Drugs' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Natural Hazards': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Natural Hazards' },
//   value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   },
//   // {
//   // '': { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
//   // value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   // },
//   // {
//   // '': { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
//   // value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   // },
//   // {
//   // '': { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
//   // value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   // },
//   // {
//   // '': { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
//   // value: { type: Sequelize.STRING, allowNull: false, defaultValue: 'No data available.' }
//   // }
// ]
// });


// // Rewrite parsing of data

// module.exports = (data) => {
//   for (let day in data) {
//     data[day].forEach((event) => {
//         let eventObj = {
//           id: event.id,
//           summary: event.summary,
//           htmlLink: sevent.htmlLink,
//           sequence: Number(event.sequence),
//           createdAt: new Date(event.created),
//           updatedAt: new Date(event.updated),
//           start: new Date(event.start.dateTime),
//           end: new Date(event.end.dateTime)
//         };
//      sequelize.sync({ force: true }).then(() => {
//        return Event.create(eventObj);
//      });
//    });
//   }
// };