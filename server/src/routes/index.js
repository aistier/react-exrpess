var express = require('express');
var post = require("./post");

const router = express.Router();

router.use("/post", post);

module.exports = router;


