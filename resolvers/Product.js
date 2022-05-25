const {categories} = require("../Data/categories.json");
exports.Product= {
    category(parent, args, context) {
        const categoryId = parent.categoryId;
        return categories.find(item => item.id === categoryId)
    }
}