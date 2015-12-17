//need to bring in express
var express = require("express");
var router = express.Router();
var knex = require("../db/knex");

router.get('/', function(req, res){
	knex('users').then(function(users){
		console.log("These are my users", users);
		res.render("index", {users:users});
	});
});

//GET /users/new
router.get('/new', function(req, res) {
	res.render("new");
});

//POST
router.post('/', function(req, res) {
	res.redirect('/users');
});

module.exports = router;