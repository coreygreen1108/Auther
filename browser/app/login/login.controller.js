'use strict'

app.controller('LoginCtrl', function($scope, LoginFactory) {
	$scope.login = function() {
		LoginFactory.kennyLoggins($scope.email, $scope.pw)
	}
})