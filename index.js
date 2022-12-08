const express = require("express");
const router = require("./app/router");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");


app.use(express.static("./public"));


app.use(router);

app.listen(2019, console.log("2019 au top"));