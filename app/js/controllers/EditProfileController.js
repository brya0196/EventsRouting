'use strict';

eventsApp.controller('EditProfileController', function EditProfileController($scope, gravatarUrlBuilder, $location) {
    $scope.user = {};

    $scope.getGravatarUrl = function(email) {
      return gravatarUrlBuilder.buildGravatarUrl(email);
    };

    $scope.cancel = function() {
      $location.url("/");
    }

  }
);