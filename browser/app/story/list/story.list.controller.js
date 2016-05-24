'use strict';

app.controller('StoryListCtrl', function ($scope, stories, Story, users, LoginFactory) {
  $scope.stories = stories;
  $scope.users = users;

  $scope.newStory = new Story();
  
  $scope.removeStory = function (story) {
    story.destroy()
    .then(function () {
      var idx = $scope.stories.indexOf(story);
      $scope.stories.splice(idx, 1);
    });
  };

  $scope.addStory = function () {
    $scope.newStory.save()
    .then(function (created) {
      // created.author = $scope.newStory.author;
      $scope.newStory = new Story();
      $scope.stories.unshift(created);
    });
  };

  $scope.isAdmin = function() {
    return LoginFactory.getKenny().isAdmin
  }

  $scope.isUser = function(userId) {
    return LoginFactory.getKenny().id === userId
  }

  $scope.getUsername = function() {
    return LoginFactory.getKenny().name;
  }
  $scope.isLoggedIn = function() {
    return !!(LoginFactory.getKenny())
  }
});
