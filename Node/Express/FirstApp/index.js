const express = require("express");

const app = express();

// app.use((req, res)=> {
//     console.log("We got a new Request");
//     res.send('<h1>This is my Webpage!</h1>');
// })

app.get("/", (req, res) => {
  res.send("Welcome to the home page.");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postID", (req, res) => {
  const { subreddit, postID } = req.params;
  res.send(`<h1>Viewing Post ID: ${postID} on the ${subreddit} subreddit</h1>`);
});

app.get("/cat", (req, res) => {
  res.send("MEOW");
});

app.get("/dog", (req, res) => {
  res.send("WOOF");
});

app.get("/search", (req, res) => {
    const {q} = req.query;

    if (!q) res.send("NOTHING FOUND IF NOTHING SEARCHED")
    else res.send(`<h1>Search results for: ${q}</h1>`);
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

app.get("*", (req, res) => {
  res.send("I don't know that path!");
});
