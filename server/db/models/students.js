'use strict';

const db = require('../db');


const Student = db.define('student', {

  firstName: {
    type: DataTypes.STRING,
    validate: {
      allowNull: false,
    }
  },
  lastName: {
    type: DataTypes.STRING,
    validate: {
    allowNull: false,
    }
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      allowNull: false,
      isEmail: true
    }
  },
  gpa: {
    type: DataTypes.DECIMAL,
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
