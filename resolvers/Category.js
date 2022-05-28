exports.Category = {
    products({id: categoryId}, {filter}, {products}) {
        const categoryProducts = products.filter((item) => item.categoryId === categoryId);
        let filterCategoryProducts = categoryProducts;
        if (filter) {
            if (filter.inStock === true) {
                filterCategoryProducts= filterCategoryProducts.filter(item => {
                    return item.inStock
                })
            }
        }
        return filterCategoryProducts
    },

};

