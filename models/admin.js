'use strict';
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    hooks: {
      beforeCreate: (admin, options) => {
        admin.password = bcrypt.hashSync(admin.password, bcrypt.genSaltSync(10), null);
      }
    }
  });
  Admin.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }
  // Admin.associate = models => {
  //   // associations can be defined here
  //   Admin.hasMany(models.Trip, {
  //     onDelete: "cascade"
  //   });
  // }
  return Admin;
};