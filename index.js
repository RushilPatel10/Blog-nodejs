const express = require("express");
const Router = require("./routers/movies.router");
const db = require("./config/database");
const path = require("path")
const app = express();

app.use(Router);

app.use(express.urlencoded({ extended: true }));

app.use("/uploads/image",express.static(path.join(__dirname,"/uploads/image")))


app.set("view engine", "ejs");



app.listen(9091, (err) => {
    if (!err) {
      db();
      console.log("server strat http://localhost:9091");
    }
  });