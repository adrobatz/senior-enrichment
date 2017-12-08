'use strict';
const Sequelize = require('sequelize');
const db = require('../index');


const Campus = db.define('campus', {

  name: {
    type: Sequelize.STRING,
      allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://www.thealmightyguru.com/Reviews/HarryPotter/Images/HogwartsSeal.gif',
  },
  description: {
    type: Sequelize.TEXT,
  },
});


module.exports = Campus;
