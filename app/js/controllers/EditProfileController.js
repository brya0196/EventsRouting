'use strict';

eventsApp.controller('EditProfileController', function EditProfileController($scope, gravatarUrlBuilder, $location) {
    $scope.user = {};

    $scope.cancel = function() {
      $location.url("/");
    }

  }
);