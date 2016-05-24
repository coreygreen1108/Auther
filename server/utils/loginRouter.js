'use strict'
var router = require('express').Router();
var User = require('../api/users/user.model');

router.put('/logout', function(req, res){
	req.session.destroy(function(){
		res.sendStatus(201);
	})
})

router.post('/signup', function(req, res){
	// var email = req.body.email;
	// var password = req.body.password; 
	User.create(req.body)
	.then(function(createdUser){
		console.log(createdUser)
		req.session.userId = createdUser.id; 
		res.status(201).send(createdUser);
	}).catch(function(error){
		console.log(error);
		res.status(401);
		console.error('Account duplication attempted!');
		res.send('Account already exists bud.');
	})
})

router.post('/', function(req, res){
	// console.log(req.body); 
	var email = req.body.email;
	var password = req.body.password; 
	User.findOne({where: {email: email, password: password}})
	.then(function(validUser){
		if(validUser) {
			// console.log(validUser.data);
			req.session.userId = validUser.id;
			res.status(201).send(validUser);
		} else {
			res.sendStatus(401);
		}
		// console.log(validUser);
		// res.send('hi');
	})
	.catch(function(invalidUserError){
		console.error('failed');
	})
})

router.get('/me', function(req, res){
	
})

module.exports = router;