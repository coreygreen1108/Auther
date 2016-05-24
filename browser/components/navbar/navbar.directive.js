'use strict';

app.directive('navbar', function ($http, $state, $location, LoginFactory) {
  return {
    restrict: 'E',
    templateUrl: '/browser/components/navbar/navbar.html',
    link: function (scope) {
      scope.pathStartsWithStatePath = function (state) {
        var partial = $state.href(state);
        var path = $location.path();
        return path.startsWith(partial);
      };
      scope.logOut = function(){
        $http.put('/login/logout').then(function(){
          LoginFactory.killKenny()
          $state.go('login');
        });
      }
      scope.username = function() {
        // if (scope.isLoggedIn()) {
          var name = LoginFactory.getKenny().name;
         // console.log(name);
          if(name) return name;
          else return LoginFactory.getKenny().email;
        // }
      } 
      scope.isLoggedIn = function() {
        return !!(LoginFactory.getKenny())
      }
    }
  }
});
