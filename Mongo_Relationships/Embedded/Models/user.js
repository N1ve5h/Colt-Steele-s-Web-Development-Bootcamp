const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/relationshipDB")
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((e) => {
    console.log("Mongo Connection Error");
    console.log(e);
  });

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  address: [ //Creates its own address schema
    {
      // _id: { id : false} optional to remove id for address data.
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);
const makeUser = async () => {
  const u = new User({
    firstname: "Harry",
    lasttname: "Potter",
  });
  u.address.push({
    street: "123 Sesame St.",
    city: "New York",
    state: "NY",
    country: "USA",
  });
  const res= await u.save();
  console.log(res);
};

makeUser();