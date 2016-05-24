'use strict'

app.controller('SignupCtrl', function($scope, LoginFactory) {
	$scope.signup = function() {
		LoginFactory.kennySignups($scope.email, $scope.pw)
	}
})