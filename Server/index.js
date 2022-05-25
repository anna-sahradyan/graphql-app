const {ApolloServer, gql} = require('apollo-server');
const {products} = require('../Data/data.json');
const {categories} = require('../Data/categories.json');
const typeDefs = gql`
    type Query {
        hello:String!
        products:[Product!]!
        product(id:ID!):Product
        categories:[Category!]!
        category(id:ID!):Category

    }
    type Category{
        id:ID!,
        name:String!
        products:[Product!]!
    }
    type Product{
        id:ID!,
        category:Category,
        title:String!,
        description:String!,
        quantity:Int!,
        price:Float!,
        inStock: Boolean,
        imgUrl:[String!],
        brand: String!,
        sizes:[[String!]],
        colors:[[String!]]

    }

`;
const resolvers = {
    Query: {
        hello: (parent, args, context) => 'Hello World',
        products: (parent, args, context) => products,
        product(parent, args, context) {
            return products.find(item => item.id === args.id);

        },
        categories: (parent, args, context) => categories,
        category(parent, args, context) {
            return categories.find((item) => item.id === args.id);
        },


    },
    Category: {
        products(parent, args, context) {
            const categoryId = parent.id;
            return products.filter((item) => item.categoryId === categoryId);
        },

    },
    Product: {
        category(parent, args, context) {
            const categoryId = parent.categoryId;
            return categories.find(item=>item.id===categoryId)
        }
    }

}
const server = new ApolloServer({
    typeDefs, resolvers


});

server.listen().then(({url}) => {
    console.log('Server is ready at ', +url)
})

