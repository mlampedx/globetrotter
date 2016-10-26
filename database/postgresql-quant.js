// 'use strict'

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('postgresql-quant', 'michael', 'LHT1869EO1710', {
//   host: 'localhost',
//   dialect: 'postgres'
// });


// const PoliticsQuant = sequelize.define('PoliticsQuant', {
// indexes: [
//   {
//   country: { type: Sequelize.STRING, allowNull: false },
//   countrycode: { type: Sequelize.STRING, allowNull: false },
//   _id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
//   },
//   {
//   'CPIA Business Regulatory Environment Rating (1=low to 6=high)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'CPIA Business Regulatory Environment Rating (1=low to 6=high)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' },
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'CPIA Property Rights and Rule-Based Governance Rating (1=low to 6=high)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'CPIA Property Rights and Rule-Based Governance Rating (1=low to 6=high)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Ease of Doing Business Index (1=Most Business-Friendly Regulations)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Ease of Doing Business Index (1=Most Business-Friendly Regulations)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Health Expenditure per capita, PPP (constant 2011 international $)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Health Expenditure per capita, PPP (constant 2011 international $)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Research and development expenditure (% of GDP)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Research and development expenditure (% of GDP)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Strength of legal rights index (0=weak to 12=strong)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Strength of legal rights index (0=weak to 12=strong)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   // {
//   // 'Judicial Branch': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Judicial Branch' },
//   // value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   // year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   // },
//   // {
//   // 'Political Parties and Leaders': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Political Parties and Leaders' },
//   // value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   // year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   // },
// ]
// });

// const EconomicsQuant = sequelize.define('EconomicsQuant', {
// indexes: [
//   {
//   country: { type: Sequelize.STRING, allowNull: false },
//   countrycode: { type: Sequelize.STRING, allowNull: false },
//   _id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
//   },
//   {
//   'GDP (current US$)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'GDP (current US$)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' },
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'GDP per capita, PPP (current international $)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'GDP per capita, PPP (current international $)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'GDP growth (annual %)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'GDP growth (annual %)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Unemployment, total (% of total labor force) (national estimate)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Unemployment, total (% of total labor force) (national estimate)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Cash surplus/deficit (% of GDP)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Cash surplus/deficit (% of GDP)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Current account balance (BoP, current US$)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Current account balance (BoP, current US$)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Net capital account (BoP, current US$)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Net capital account (BoP, current US$)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Employment in agriculture (% of total employment)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Employment in agriculture (% of total employment)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Employment in industry (% of total employment)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Employment in industry (% of total employment)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Employment in services (% of total employment)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Employment in services (% of total employment)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Stocks traded, total value (current US$)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Stocks traded, total value (current US$)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Foreign direct investment, net (BoP, current US$)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Foreign direct investment, net (BoP, current US$)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Total reserves (includes gold, current US$)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Total reserves (includes gold, current US$)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   }
// ]
// });

// const SocietyQuant = sequelize.define('SocietyQuant', {
// indexes: [
//   {
//   country: { type: Sequelize.STRING, allowNull: false },
//   countrycode: { type: Sequelize.STRING, allowNull: false },
//   _id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
//   },
//   {
//   'Population, total': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Population, total' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' },
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Population growth (annual %)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Population growth (annual %)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Ease of Doing Business Index (1=Most Business-Friendly Regulations)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Ease of Doing Business Index (1=Most Business-Friendly Regulations)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Health Expenditure per capita, PPP (constant 2011 international $)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Health Expenditure per capita, PPP (constant 2011 international $)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Research and development expenditure (% of GDP)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Research and development expenditure (% of GDP)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   {
//   'Strength of legal rights index (0=weak to 12=strong)': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Strength of legal rights index (0=weak to 12=strong)' },
//   value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   },
//   // {
//   // 'Judicial Branch': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Judicial Branch' },
//   // value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   // year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   // },
//   // {
//   // 'Political Parties and Leaders': { type: Sequelize.STRING, allowNull: false, defaultValue: 'Political Parties and Leaders' },
//   // value: { type: Sequelize.DECIMAL, allowNull: false, defaultValue: 'No data available.' }
//   // year: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 'No data available.' }
//   // },
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