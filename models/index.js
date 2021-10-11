'use strict';

const fs = require('fs');     // be carefaul
const path = require('path');    // be carefaul
const Sequelize = require('sequelize');
const basename = path.basename(__filename);    // be carefaul
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];    // there are three object in config file

//before '/../config/config.json'
//after '../config/config.json'

// __dirname = /Users/bootcamp/tdm-mxc-fsf-pt-06-2021-u-c/bootcamp_project2/models
// const db = {};

// let sequelize;
// if (process.env.JAWSDB_URL) {
//   // for Heroku
//   sequelize = new Sequelize(process.env.JAWSDB_URL, {});
// }else{
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
//   // console.log('option2', config.database, config.username, config.password, config);
// }
// }
// Before
// const env = process.env.NODE_ENV || 'development';

// After
// console.log('process.env.NODE_ENV')
// console.log(process.env.NODE_ENV)
// console.log('process.env:',process.env)
const env = process.env.NODE_ENV || 'development';    // add .trim()
console.log('process.env.NODE_ENV : ',env );     // NODE_ENV has to be production in herokuheroku logs --tail

// DB setup
const db = {};

let sequelize;
if (process.env.JAWSDB_URL) {
  // for Heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL, {});
} else {
  // const env = process.env.NODE_ENV || "development";

  // const config = path.resolve(__dirname, "..", "config", "config.json")[env];
  const config = require(__dirname + '/../config/config.json')[env];

  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const model2 = require('./materialmaster/kiaandsapmaterial')(sequelize, Sequelize);

const model1 = require('./materialmaster/kiamaterial')(sequelize, Sequelize);

const model3 = require('./production_report/dailyproductionreport')(sequelize, Sequelize);
// const model4 = require('./materialmaster/KiaMaterial')(sequelize, Sequelize);

const model5 = require('./timecontrol/timecontrol')(sequelize, Sequelize);
// const model6 = require('./materialmaster/KiaMaterial')(sequelize, Sequelize);
db.timecontrol = model5;

db.dailyproductionreport = model3;

db.kiaandsapmaterial = model2;

db.kiamaterial = model1;
// db.model4 = model4;
// db.model6 = model6;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
