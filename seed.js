const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize")

const models = require('./models')

const user = models.Admin.create({
  username: 'ethan123',
  email: 'this@gmail.com',
  password: 'th1sPassw0rd',
});
// let's assume the default of isAdmin is false
console.log(user.username); // 'alice123'
console.log(user.isAdmin); // false
