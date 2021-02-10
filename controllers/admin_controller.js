const db = require('../models');

//this is the users_controller.js file
exports.dbPage = (req,res) => {
  db.Product.findAll().then(function (dbProduct) {
    console.log("we got to the render function.")
    res.render('admin/admin', {
        layout: 'main',
        item: dbProduct
    });
    console.log(dbProduct)
});
  // res.render('admin/admin', {
  //   layout: 'main'
  // });
};

exports.signOutAdmin = (req,res) => {
  req.logout();
  res.redirect("/");
};

// login
exports.loginAdmin = (req, res) => {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
  res.json("/");
};

// register a user
exports.signUpAdmin = (req,res) => {

  db.Admin.findAll({
    where: {username: req.body.username}
  }).then(users => {
    if (users.length > 0) {
      res.json({
        duplicateAdmin: true
      });
    //At some point, make sure that only one user can be associated with an email.
    } else {
      db.Admin.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(() => res.send({redirect: '/'})
      .catch(err => res.json(err))
      )
    }
  })
};

