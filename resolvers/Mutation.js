const {v4: uuid} = require("uuid")
exports.Mutation = {
    addCategory: (parent, {input}, {categories}) => {
        const {name} = input
        const newCategory = {
            id: uuid(),
            name
        };
        categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, {input}, {products}) => {
        const {
            title, description, price, inStock, imgUrl, brand, categoryId
        } = input;
        const newProduct = {
            id: uuid(),
            title, description, price, inStock, imgUrl, brand, categoryId
        }
        products.push(newProduct);
        return newProduct
    },

};