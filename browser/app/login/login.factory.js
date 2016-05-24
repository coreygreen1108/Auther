'use strict'

app.factory('LoginFactory', function($http, $state) {
	var kennyPowers = null;
	return {
		kennyLoggins: function(email, password) {
			$http.post('/login', {
				email: email,
				password: password
			})
			.then(function(user) {
				kennyPowers = user.data;
				//console.log(kennyPowers)
				$state.go('stories')
			})
			.catch(function(err) {
				console.error(err)
			})
		},
		kennySignups: function(email, password){
			$http.post('/login/signup', {
				email: email,
				password: password
			})
			.then(function(user) {
				console.log('USER:' + user);
				kennyPowers = user.data;
				$state.go('stories')
			})
			.catch(function(err) {
				console.error(err)
			})
		},
		getKenny: function() {
			return kennyPowers
		},
		killKenny: function() {
			kennyPowers = null;
		}

	}
})