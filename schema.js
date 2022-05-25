const {gql} = require('apollo-server');

 exports.typeDefs = gql`
    type Query {
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
