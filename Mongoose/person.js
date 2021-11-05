const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/User")
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((err) => {
    console.log("There is an ERROR");
    console.log(err);
  });


const personSchema = new mongoose.Schema({
    first: String,
    last: String,
})

personSchema.virtual('fullname').get(function (){
    return `${this.first} ${this.last}`;
})

personSchema.pre('save', function () {
  this.first = 'YO';
  this.last = 'MAMA';
  console.log("About to save")
})

personSchema.pre('save', function () {
  console.log("Saved")
})

const Person = mongoose.model('Person', personSchema);