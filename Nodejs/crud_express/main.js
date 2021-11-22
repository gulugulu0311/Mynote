let express = require("express");
let router = require("./router");
let bodyParser = require("body-parser");
let app = express();

//setup
app.engine("html", require("express-art-template"));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//static
app.use("/public/", express.static("./public"));
app.use("/node_modules/", express.static("./node_modules"));
//routes
app.use(router)

app.listen(3000, () => {
  console.log("Server is running...");
});
