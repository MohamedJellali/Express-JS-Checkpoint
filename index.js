const express = require("express");
const app = express();
const myrouter = require("./routes/myrouter");

//creating a midleware ensures that the website will be closed between 17h-9h and on the weekend
const myMiddleware = (req, res, next) => {
  var time = new Date();
  var hour = time.getHours();
  var day = time.getDay();
  if (day >= 1 && day < 6 && hour >= 9 && hour < 17) {
    console.log(hour, day);
    next();
  } else {
    res.render("closed");
    console.log(hour, day);
  }
};

app.use(myMiddleware);

app.use("/", myrouter);

app.set("view engine", "pug");
app.set("views", "./views");

app.listen(3000, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:3000"
  );
});
