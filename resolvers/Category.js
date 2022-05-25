const {products} = require("../Data/data.json");
exports.Category={
    products(parent, args, context) {
        const categoryId = parent.id;
        return products.filter((item) => item.categoryId === categoryId);
    },

};

