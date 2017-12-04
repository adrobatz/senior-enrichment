'use strict';
const Sequelize = require('sequelize');
const db = require('../index');


const Campus = db.define('campus', {

  name: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
});


module.exports = Campus;
