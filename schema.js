const {gql} = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        products(filter:ProductFilterInput):[Product!]!
        product(id:ID!):Product
        categories:[Category!]!
        category(id:ID!):Category

    }
    type Mutation{
        addCategory(input:AddCategoryInput!):Category!
        addProduct(input:AddProductInput!):Product!
        
    }
    type Color{
        id:ID!
        name:[String!]!

    }
    type Size{
        id:ID!
        name:[String!]!

    }
    type Category{
        id:ID!,
        name:String!
        products(filter:ProductFilterInput):[Product!]!
    }
    type Product{
        id:ID!,
        category:Category,
        title:String!,
        description:String!,
        price:Float!,
        inStock: Boolean,
        imgUrl:[String!],
        brand: String!,
        sizes:[Size!]!,
        colors:[Color!]!,
    }
    input ProductFilterInput{
        inStock:Boolean

    }
    input AddCategoryInput{
        name:String!
    }
    input  AddProductInput{
        title:String!,
        categoryId:String!,
        description:String!,
        price:Float!,
        inStock: Boolean,
        imgUrl:[String!],
        brand: String!,
    }
   
`;
