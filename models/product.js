// const { Sequelize } = require("sequelize");
// const sequelize = require("sequelize");

//lets write this bad boy in es6 
module.exports = (sequelize, DataTypes) => {
    //Defining Product
    const Product = sequelize.define("Product", {
        //Here were creating the columns
        instName: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        descr: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        //For img/ audio, I'm allowing null just because I'm not too sure how to incorporate the href yet. 
        //I'm assuming its gonna be a string, but you know what they say about assuming...
        img: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        audio: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // availability: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false,
        // },
        // price: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,

        // }

    });
    return Product;
};