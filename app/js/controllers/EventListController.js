'use strict';

eventsApp.controller('EventListController', function($scope, $route, eventData) {
  $scope.events = $route.current.locals.events;
});