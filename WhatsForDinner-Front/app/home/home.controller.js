(function() {
  'use strict';
  angular.module('app').controller('HomeController', HomeController);
  HomeController.$inject = ['UserService', '$rootScope', '$scope', '$http'];

  function HomeController(UserService, $rootScope, $scope, $http) {
    var vm = this;
    vm.user = null;
    vm.names = null;
    vm.allUsers = [];
    vm.deleteUser = deleteUser;
    initController();

    function initController() {
      if ($rootScope.globals.currentUser) {
        loadCurrentUser();
      }
      loadAllUsers();
      testName();
    }

    function ColorCtrl() {
      $rootScope.getColorCtrlScope = function() {
        return $rootScope;
      }
      $rootScope.colors = [{
        "title": "red",
        "type": "primary"
      }, {
        "title": "green",
        "type": "primary"
      }, {
        "title": "blue",
        "type": "primary"
      }, {
        "title": "magenta",
        "type": "secondary"
      }, {
        "title": "cyan",
        "type": "secondary"
      }, {
        "title": "yellow",
        "type": "secondary"
      }, ];
      $rootScope.colortypes = [{
        "title": "primary"
      }, {
        "title": "secondary"
      }, ];
    }

    function testName() {
      $rootScope.getColorCtrlScope = function() {
        return $rootScope;
      }
      $rootScope.search = {};
      $rootScope.names = [{
        "Name": "Veggie Burger",
        "description": "Low-calorie veggie burger",
        "image": "/assets/images/burger.jpeg"
      }, {
        "Name": "Smoked Salmon",
        "description": "Quick and easy to do smoke salmon",
        "image": "/assets/images/fish.jpeg"
      }, {
        "Name": "Oven Baked Chicken",
        "description": "Southern-style oven baked chicken",
        "image": "/assets/images/food2.jpg"
      }, {
        "Name": "Raspberry Custard",
        "description": "Craving dessert?",
        "image": "/assets/images/food4.jpg"
      }, {
        "Name": "Chicken Parmasean",
        "description": "Love chicken, pasta, and cheese?",
        "image": "/assets/images/food6.jpg"
      }, {
        "Name": "Juicy Burger",
        "description": "The name says it all...",
        "image": "/assets/images/juicyburger.jpeg"
      }, {
        "Name": "Zesty Salad",
        "description": "Trying to stay healthy?",
        "image": "/assets/images/salad.jpg"
      }, {
        "Name": "Strawberry Parfait",
        "description": "Make a delicious pastry for the family",
        "image": "/assets/images/sweet1.jpg"
      }, {
        "Name": "Chocolate Layered Cake",
        "description": "Need chocolate?",
        "image": "/assets/images/sweets2.jpeg"
      }, {
        "Name": "Berry Waffles",
        "description": "Easy to do berry waffles",
        "image": "/assets/images/waffles.jpg"
      }, {
        "Name": "Popcorn Chicken",
        "description": "This chicken is popping",
        "image": "/assets/images/popcornChick.jpg"
      }, {
        "Name": "Spaghetti",
        "description": "Craving Italian? No need to go to Italy",
        "image": "/assets/images/spagetti.jpg"
      }];
      $rootScope.Names = [{
        "title": "Veggie Burger",
        "description": "Low-calorie veggie burger",
        "image": "/assets/images/burger.jpeg"
      }, {
        "title": "Smoked Salmon",
        "description": "Quick and easy to do smoke salmon",
        "image": "/assets/images/fish.jpeg"
      }, {
        "title": "Oven Baked Chicken",
        "description": "Southern-style oven baked chicken",
        "image": "/assets/images/food2.jpg"
      }, {
        "title": "Raspberry Custard",
        "description": "Craving dessert?",
        "image": "/assets/images/food4.jpg"
      }, {
        "title": "Chicken Parmasean",
        "description": "Love chicken, pasta, and cheese?",
        "image": "/assets/images/food6.jpg"
      }, {
        "title": "Juicy Burger",
        "description": "The name says it all...",
        "image": "/assets/images/juicyburger.jpeg"
      }, {
        "title": "Zesty Salad",
        "description": "Trying to stay healthy?",
        "image": "/assets/images/salad.jpg"
      }, {
        "title": "Strawberry Parfait",
        "description": "Make a delicious pastry for the family",
        "image": "/assets/images/sweet1.jpg"
      }, {
        "title": "Chocolate Layered Cake",
        "description": "Need chocolate?",
        "image": "/assets/images/sweets2.jpeg"
      }, {
        "title": "Berry Waffles",
        "description": "Easy to do berry waffles",
        "image": "/assets/images/waffles.jpg"
      }, {
        "title": "Popcorn Chicken",
        "description": "This chicken is popping",
        "image": "/assets/images/popcornChick.jpg"
      }, {
        "title": "Spaghetti",
        "description": "Craving Italian? No need to go to Italy",
        "image": "/assets/images/spagetti.jpg"
      }, ];
    }

    function loadCurrentUser() {
      UserService.GetByUsername($rootScope.globals.currentUser.username).then(function(user) {
        vm.user = user;
      });
    }

    function loadAllUsers() {
      UserService.GetAll().then(function(users) {
        vm.allUsers = users;
      });
    }

    function deleteUser(id) {
      UserService.Delete(id).then(function() {
        loadAllUsers();
      });
    }
  }
})();