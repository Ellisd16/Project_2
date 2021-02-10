const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize")

const models = require('./models')

const user = models.Admin.destroy({
  where: {
    username: 'ethan123',
    email: 'this@gmail.com',

}});
const user2 = models.Admin.create({

    username: 'Adm1nJJ35768912',
    email: 'theonlyethannewell@gmail.com',
    password: '142Ttjyy89465FHER',
});

  // let's assume the default of isAdmin is false
  console.log(user.username); // 'alice123'
 // false
  console.log(user2.username);