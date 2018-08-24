'use strict';

eventsApp
  .directive('greeting', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
      controller: function($scope) {
        var greeting = ['hello']
        $scope.sayHello = function() {
          alert(greeting.join());
        };
        this.addGreeeting = function(_greeting) {
          greeting.push(_greeting);
        }
      }
    }
  })
  .directive('finnish', function() {
    return {
      restrict: 'A',
      require: '^greeting',
      link: function (scope, element, attrs, controller) {
        controller.addGreeeting('Hei');
      }
    };
  })
  .directive('hindi', function() {
    return {
      restrict: 'A',
      require: '^greeting',
      link: function (scope, element, attrs, controller) {
        controller.addGreeeting('Namaste');
      }
    }
  });
