var express = require('express');
var bodyParser = require("body-parser");

var post = require('./routes/post');

const app = express();
let port = 8080;

app.use(bodyParser.json());

//SERVE STATIC FILES = REACT PROJECT
app.use("/", express.static(__dirname + "/../../client/build"));

//LOAD API FROM ROUTES
app.use("/post", post);

app.listen(port, () => {
  console.log("Express is listening on port", port);
});


