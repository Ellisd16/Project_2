module.exports = app => {

    const home = require('./routes/home');
    const inventory = require('./routes/inventory');
    const product = require('./routes/product');
    const gallery = require('./routes/gallery');
    const admin = require('./routes/admin');
    const users = require('./routes/users');

    app.use('/', home);
    app.use('/inventory', inventory);
    app.use('/product/:id', product);
    app.use('/gallery', gallery);
    app.use('/admin', admin);
    app.use('/users', users);

};