const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('../schema.js');
const {Query} = require('../resolvers/Query');
const {Category} = require('../resolvers/Category')
const {Product} = require('../resolvers/Product')
const{products}=require('../Data/data.json');
const{categories}=require('../Data/categories.json')
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product
    },
    context:{
    categories,
        products
    },

});

server.listen().then(({url}) => {
    console.log('Server is ready at ', +url)
})

