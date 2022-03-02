// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'catagory_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Post, {
  through: ProductTag,
  as: 'product_tag',
  foreignKey: 'tag_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Post, {
  through: ProductTag,
  as: 'product_tag',
  foreignKey: 'product_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
