const { Sequelize } = require("sequelize");
const config = require("../config/db.config");
const CartModel = require("./cart.model");
const Category = require("./category.model");
const OrderDetail = require('./OrderDetail.model')
const Products = require("./products.model");
const UserModel = require("./users.model");
const Orders = require("./Orders.model");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
});

//user vs Order : one - to - one
UserModel.hasOne(Orders, {
    foreignKey:{
        name:"user_id"
    },
    as:"Order"
}
);

Orders.belongsTo(UserModel, {
  foreignKey:{
    name:"user_id"
  },
  as:"user"
});

//user vs Order : one - to - one
UserModel.hasOne(CartModel, {
    foreignKey:{
        name:"user_id"
    },
    as:"CartModel"
}
);

CartModel.belongsTo(UserModel, {
  foreignKey:{
    name:"user_id"
  },
  as:"user"
});

//OrderDetail vs Order : one to many
Orders.hasMany(OrderDetail, {
    foreignKey:{
        name:"Order_id"
    },
    as:"OrderDetail"
}
);

OrderDetail.belongsTo(Orders, {
  foreignKey:{
    name:"Order_id"
  },
  as:"Order"
});

//Products vs Category : one to many
Category.hasMany(Products, {
    foreignKey:{
        name:"category_id"
    },
    as:"Products"
}
);

Products.belongsTo(Category, {
  foreignKey:{
    name:"category_id"
  },
  as:"Category"
});


//Products vs Category : one to many
OrderDetail.hasMany(Products, {
    foreignKey:{
        name:"OrderDetail_id"
    },
    as:"Products"
}
);

Products.belongsTo(OrderDetail, {
  foreignKey:{
    name:"OrderDetail_id"
  },
  as:"OrderDetail"
});

//Products vs CartModel : one to many
CartModel.hasMany(Products, {
    foreignKey:{
        name:"CartModel_id"
    },
    as:"Products"
}
);

Products.belongsTo(CartModel, {
  foreignKey:{
    name:"CartModel_id"
  },
  as:"CartModel_id"
});

CartModel.sync({force:true})
Category.sync({force:true})
OrderDetail.sync({force:true})
Products.sync({force:true})
UserModel.sync({force:true})
Orders.sync({force:true})