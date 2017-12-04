'use strict';

const Sequelize = require('sequelize');
const db = require('../index');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
    }
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
    allowNull: false,
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0
    }
  },
}, {

  setterMethods: {
    name: function() {
     return this.firstName + ' ' + this.lastName
    },
  }
});

module.exports = Student;
