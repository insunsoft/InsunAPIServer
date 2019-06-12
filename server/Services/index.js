'use strict';


const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const Service= {};
fs
  .readdirSync(__dirname)
  .filter((file) =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model =require(path.join(__dirname, file));
    Service[model.name] = model;
  });

Object.keys(Service).forEach((modelName) => {

});

//这个地方疯狂加属性。
Service.database = config.database.DATABASE;
module.exports = Service;






