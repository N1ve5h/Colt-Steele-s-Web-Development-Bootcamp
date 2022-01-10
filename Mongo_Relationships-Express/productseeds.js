const mongoose = require("mongoose");
const Product = require("./Models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand2")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Can not connect to Database");
    console.log(err);
  });

// const p = new Product({
//   name: "Ruby Grapefruit",
//   price: 1.99,
//   category: "fruit",
// });

// p.save().then((p) => {
//   console.log(p);
// })
// .catch(e => {
//     console.log("Error");
//     console.log(e);
// })

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable',
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit',
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit',
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable',
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy',
    },
];

Product.insertMany(seedProducts);