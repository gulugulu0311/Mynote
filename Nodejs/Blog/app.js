const express = require("express");
const path = require("path");
const router = require("./routes/sessions");
const bodyParser = require("body-parser");
const session = require("express-session");

let app = express();

/**
 * setup
 */
app.use("/public/", express.static(path.join(__dirname, "./public/")));
app.use(
  "/node_modules/",
  express.static(path.join(__dirname, "./node_modules/"))
);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.engine("html", require("express-art-template"));
app.set("views", path.join(__dirname, "./views/"));
//express-session
app.use(
  session({
    secret: "mono",
    resave: false,
    saveUninitialized: true,
  })
);

/**
 *
 */
//use router
app.use(router);

app.listen(3000, () => console.log("Server is running.."));
