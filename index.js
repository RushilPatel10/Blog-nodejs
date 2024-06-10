const express = require("express");
const Router = require("./routers/movies.router");
const db = require("./config/database");
const path = require("path")
const app = express();
const cookieParser = require("cookie-parser");
const blogRouter = require("./routers/movies.router");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads/image", express.static(path.join(__dirname, "/uploads/image")))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", blogRouter);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.use(Router);

app.listen(9091, (err) => {
  if (!err) {
    db();
    console.log("server strat http://localhost:9091");
  }
});