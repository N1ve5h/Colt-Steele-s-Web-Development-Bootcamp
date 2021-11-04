const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("Connection Open");
  })
  .catch(() => {
    console.log("Oh No an Error");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  category: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

productSchema.methods.greet = function () {
  console.log("Hello");
  console.log(`- from ${this.name}`);
};

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.statics.fireSale = function () { 
  return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

// const bike = new Product({ //data
//   name: "Bike Helmet",
//   price: "19.50",
// });

// bike //saving data the database.
//   .save()
//   .then((data) => {
//     console.log("it worked");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("it didnt't work");
//     console.log(err);
//   });

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Bike Helmet" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
};

Product.fireSale().then(res => console.log(res));