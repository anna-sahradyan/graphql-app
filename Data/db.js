  export const products = [
    {
        id: "1a",
        title: "Nike Air Huarache Le",
        price: 120,
        description: "Great sneakers for everyday use!",
        category:"clothes",
        inStock:false,
        imgUrl: [
            "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
            "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
            "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
            "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
            "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087"
        ],
        brand: "Nike x Stussy",

        sizes: [
            ["small", "S"], ["medium", "M"], ["Large", "L"], ["extra large", "XL"]
        ],
        colors: [
            ["green", "#44FF03"], ["cyan", "#03FFF7"], ["blue", "#030BFF"], ["white", "#FFFFFF"], ["black", "#000000"]
        ]
    },

    {
        id: "2a",
        title: "Jacket",
        price: 220,
        description: "Awesome winter jacket",
        category:"clothes",
        inStock:false,
        imgUrl: [
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg',
            'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png',
            'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png'
        ],

        brand: "Canada Goose",
        sizes: [
            ["small", "S"], ["medium", "M"], ["Large", "L"], ["extra large", "XL"]
        ],
        colors: [
            ["green", "#44FF03"], ["cyan", "#03FFF7"], ["blue", "#030BFF"], ["white", "#FFFFFF"], ["black", "#000000"]
        ]
    },

    {
        id: "3a",
        title: "PlayStation 5",
        price: 700,
        description: "A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha",
        category:"tech",
        inStock:false,
        imgUrl: [
            'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg'
        ],

        brand: "Sony",
        sizes: [
            ["small", "S"], ["medium", "M"], ["Large", "L"], ["extra large", "XL"]
        ],
        colors: [
            ["green", "#44FF03"], ["cyan", "#03FFF7"], ["blue", "#030BFF"], ["white", "#FFFFFF"], ["black", "#000000"]
        ]
    },

    {
        id: "4a",
        title: "Xbox Series S 512GB",
        price: 277,
        description: "Spiele Games mit bis zu 120 Bilder pro Sekunde",
        category:"tech",
        inStock:false,
        imgUrl: [
            'https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg'
        ],

        brand: "Microsoft",
        sizes: [
            ["small", "S"], ["medium", "M"], ["Large", "L"], ["extra large", "XL"]
        ],
        colors: [
            ["green", "#44FF03"], ["cyan", "#03FFF7"], ["blue", "#030BFF"], ["white", "#FFFFFF"], ["black", "#000000"]
        ]
    }






];
  export const categories =[
    {
        id: "all1",
        "name": "all"
    } ,
    {
        id: "tech2",
        name: "tech"
    },
    {
        id:"clothes3",
        name:"clothes"

    }

];
 module.exports = {
     products,
     categories,

 };