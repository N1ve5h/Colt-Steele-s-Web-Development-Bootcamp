const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    // console.log(req.method, req.path, req.requestTime);
    next();
})

const verifyPassword  = (req,res,next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
      return next();
    }
    res.send('WRONG PASSWORD TRY AGAIN');
}

app.get("/", (req, res) => {
  res.send("Homepage!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF WOOF");
})

app.get("/secret",verifyPassword, (req,res) => {
  res.send("My Secret is: I believe python is psuedo-code.")
})

app.use((req,res) => {
    res.status(404).send("NOT FOUND")
})

app.listen(3000, () => {
  console.log("App running on localhost:3000");
});
