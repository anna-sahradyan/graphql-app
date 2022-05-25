const {products} = require("../Data/data.json");
const {categories} = require("../Data/categories.json");
exports.Query= {
        products: (parent, args, context) => products,
        product(parent, args, context) {
        return products.find(item => item.id === args.id);

    },
    categories: (parent, args, context) => categories,
        category(parent, args, context) {
        return categories.find((item) => item.id === args.id);
    },


}