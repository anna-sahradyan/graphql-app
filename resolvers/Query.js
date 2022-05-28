exports.Query = {
    products: (parent, {filter}, {products}) => {
        let filterProducts = products;
        if (filter) {
            if (filter.inStock === true) {
                filterProducts = filterProducts.filter(item => {
                    return item.inStock
                })
            }
        }
        return filterProducts
    },
    product(parent, {id}, {products}) {
        return products.find(item => item.id === id);

    },
    categories: (parent, args, {categories}) => categories,
    category(parent, {id}, {categories}) {
        return categories.find((item) => item.id === id);
    },


}
