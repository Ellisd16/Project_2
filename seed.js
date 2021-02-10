const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize")

const models = require('./models')

const user = models.Admin.destroy({
  where: {
    username: 'ethan123',
    email: 'this@gmail.com',
    password: 'th1sPassw0rd',
}});
const user2 = models.Admin.create({
  where: {
    username: 'Adm1nJJ35768912',
    email: 'theonlyethannewell@gmail.com',
    password: '142Ttjyy89465FHER',
}});
user2();
  // let's assume the default of isAdmin is false
  console.log(user.username); // 'alice123'
  console.log(user.isAdmin); // false