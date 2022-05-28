const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('../schema.js');
const {Query} = require('../resolvers/Query');
const {Mutation} = require('../resolvers/Mutation');
const {Category} = require('../resolvers/Category')
const {Product} = require('../resolvers/Product')
const {products} = require('../Data/data.json');
const {categories} = require('../Data/categories.json');
const {sizes} = require('../Data/sizes.json');
const {colors} = require('../Data/colors.json');

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Category,
        Product,

    },
    context: {
        categories,
        products,
        colors,
        sizes,
    },

});

server.listen().then(({url}) => {
    console.log('Server is ready at ', +url)
})

