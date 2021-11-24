const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require("./AppError");

app.use(morgan("tiny"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  // console.log(req.method, req.path, req.requestTime);
  next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    return next();
  }
  // res.send("WRONG PASSWORD TRY AGAIN");
  throw new AppError("Password required", 401);
};

app.get("/", (req, res) => {
  res.send("Homepage!");
});

app.get("/error", (req, res) => {
  chicken.fly();
});

app.get("/dogs", (req, res) => {
  res.send("WOOF WOOF");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("My Secret is: I believe python is psuedo-code.");
});

app.get('/admin', (req, res) => {
  throw new AppError('You are not an Admin', 403)
})

app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});

// app.use((err, req, res, next) => {
//   console.log("*******************************");
//   console.log("*************ERROR*************");
//   console.log("*******************************");
//   next(err);
// })

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something went wrong!'} = err
  res.status(status).send(message);
})

app.listen(3000, () => {
  console.log("App running on localhost:3000");
});
