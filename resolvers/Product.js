exports.Product = {
    category({categoryId}, args, {categories}) {
        return categories.find(item => item.id === categoryId)
    },
    sizes: ({id}, args, {sizes})=>{
    return sizes.filter((item) => item.sizeId === id);
},
    colors: ({id}, args, {colors})=>{
        return colors.filter((item) => item.colorId === id);
    }

}