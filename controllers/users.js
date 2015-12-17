//need to bring in express
var express = require("express");
var router = express.Router();

router.get('/', function(req, res){
	knex('users');
	res.render("index");
});

module.exports = router;