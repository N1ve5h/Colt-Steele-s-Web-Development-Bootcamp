const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://localhost:27017/relationshipDB")
  .then(() => {
    console.log("Mongo Database Connected");
  })
  .catch((e) => {
    console.log("Mongo Database not Connected");
    console.log(e);
  });

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweets = async () => {
//   // const user = new User({username: 'chickenfan69', age:61});
//   const findUser = await User.findOne({username: 'chickenfan69'});
//   // const tweet1 = new Tweet({text:"I love my chicken family", likes:0});
//   const tweet2 = new Tweet({text:"My chickens make lot of noise", likes:419});
//   // tweet1.user = user;
//   // user.save();
//   // tweet1.save();
//   tweet2.user = findUser;
//   tweet2.save();
// };
// makeTweets();

const findTweetsPopulated = async () => {
  // const t = await Tweet.find({}).populate('user');
  const t = await Tweet.find({}).populate('user', 'username -_id'); //Populate without an ID
  console.log(t);
}

findTweetsPopulated();