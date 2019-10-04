(function () {
    'use strict';
    angular.module('app').controller('ProfileController', ProfileController);
    ProfileController.$inject = ['UserService', '$rootScope', '$scope', '$cookies'];

    function ProfileController(UserService, $rootScope, $scope, $cookies) {
        var vm = this;
        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;
        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
            testName();
            fessCntrl();
        }

        function fessCntrl() {
            if (!$rootScope.expenses) {
                $rootScope.expenses = [{
                    exTitle: ""
                    , amount: ""
                    , typeOfShare: ""
                    , date: ""
                }];
            }
            $rootScope.submitExpense = function (expenseInfo) {
                $rootScope.expenses.push(expenseInfo);
            }
        };

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username).then(function (user) {
                vm.user = user;
            });
        }

        function loadAllUsers() {
            UserService.GetAll().then(function (users) {
                vm.allUsers = users;
            });
        }

        function deleteUser(id) {
            UserService.Delete(id).then(function () {
                loadAllUsers();
            });
        }

        function testName() {
            var listInput = element(by.model('list'));
            var output = element(by.binding('list'));
            listInput.sendKeys('abc\ndef\nghi');
            expect(output.getText()).toContain('[\n  "abc",\n  "def",\n  "ghi"\n]');
            vm.names = [
                {
                    "Name": "Veggie Burger"
                    , "description": "Low-calorie veggie burger"
                    , "image": "/app/assets/images/burger.jpeg"
                }, {
                    "Name": "Smoked Salmon"
                    , "description": "Quick and easy to do smoke salmon"
                    , "image": "/app/assets/images/fish.jpeg"
                }, {
                    "Name": "Oven Baked Chicken"
                    , "description": "Southern-style oven baked chicken"
                    , "image": "/app/assets/images/food2.jpg"
                }, {
                    "Name": "Raspberry Custard"
                    , "description": "Craving dessert?"
                    , "image": "/app/assets/images/food4.jpg"
                }, {
                    "Name": "Chicken Parmasean"
                    , "description": "Love chicken, pasta, and cheese?"
                    , "image": "/app/assets/images/food6.jpg"
                }, {
                    "Name": "Juicy Burger"
                    , "description": "The name says it all..."
                    , "image": "/app/assets/images/juicyburger.jpeg"
                }, {
                    "Name": "Zesty Salad"
                    , "description": "Trying to stay healthy?"
                    , "image": "/app/assets/images/salad.jpg"
                }, {
                    "Name": "Strawberry Parfait"
                    , "description": "Make a delicious pastry for the family"
                    , "image": "/app/assets/images/sweet1.jpg"
                }, {
                    "Name": "Chocolate Layered Cake"
                    , "description": "Need chocolate?"
                    , "image": "/app/assets/images/sweets2.jpeg"
                }, {
                    "Name": "Berry Waffles"
                    , "description": "Easy to do berry waffles"
                    , "image": "/app/assets/images/waffles.jpg"
                }, {
                    "Name": "Popcorn Chicken"
                    , "description": "This chicken is popping"
                    , "image": "/app/assets/images/popcornChick.jpg"
                }, {
                    "Name": "Spaghetti"
                    , "description": "Craving Italian? No need to go to Italy"
                    , "image": "/app/assets/images/spagetti.jpg"
                }];
        }

        function testName() {
            vm.something = [{
                exTitle: "Chicken Breast "
                , amount: "3 pounds"
                , date: "11-20-2017"
                }, {
                exTitle: "2% Milk  "
                , amount: "3 pounds"
                , date: "11-20-2017"
                }, {
                exTitle: "Parmasean Cheese "
                , amount: "3 pounds"
                , date: "11-20-2017"
                }, {
                exTitle: "Turkey Breast"
                , amount: "3 pounds"
                , date: "11-20-2017"
                }, {
                exTitle: "Lettuce"
                , amount: "3 pounds"
                , date: "11-20-2017"
                }, {
                exTitle: "Water"
                , amount: "3 pounds"
                , date: "11-20-2017"
                }, {
                exTitle: "Paprika"
                , amount: "3 pounds"
                , date: "11-20-2017"
                }];
        }
    }
})();
