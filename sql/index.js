
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../app/config');


const db = {};
// 实例化sequelize
export const sequelize = new Sequelize(config.database.DATABASE,config.database.USERNAME,config.database.PASSWORD)
/* 
// 导入模型统一管理
export const Banner           = sequelize.import(__dirname + '/banners.js')
export const Image            = sequelize.import(__dirname + '/images.js')
export const Product          = sequelize.import(__dirname + '/products.js')
export const Theme_product    = sequelize.import(__dirname + '/theme_products.js')
export const Theme            = sequelize.import(__dirname + '/themes.js')
export const Category         = sequelize.import(__dirname + '/category.js')
export const Product_image    = sequelize.import(__dirname + '/product_image.js')
export const Product_property = sequelize.import(__dirname + '/product_property.js')


// 表间关联关系
// banner关系
Banner.belongsTo(Image, {
  foreignKey: 'img_id',
  targetKey: 'id'
})

// theme关系
Theme.belongsTo(Image, {
  foreignKey: 'head_img_id',
  targetKey: 'id'
})
Theme.belongsToMany(Product, {
  through: Theme_product,
  foreignKey: 'theme_id'
})

// product关系
Product.belongsTo(Image, {
  foreignKey: 'img_id',
  targetKey: 'id'
})
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  targetKey: 'id'
})
Product.belongsToMany(Theme, {
  through: Theme_product,
  foreignKey: 'product_id'
})
Product.hasMany(Product_image,{
  foreignKey:'product_id',
  sourceKey:'id'
})

// 目录关系
Category.belongsTo(Image,{
  foreignKey:'topic_img_id',
  targetKey:'id'
})
Category.hasMany(Product,{
  foreignKey:'category_id',
  sourceKey:'id'
})

Product_image.belongsTo(Product,{
  foreignKey:'product_id',
  targetKey:'id'
})
Product_image.belongsTo(Image,{
 foreignKey:'img_id',
 targetKey:'id'
}) */