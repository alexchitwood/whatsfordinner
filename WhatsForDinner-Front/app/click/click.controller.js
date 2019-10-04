(function () {
    'use strict';
    angular.module('app').controller('ClickController', ClickController);
    ClickController.$inject = ['UserService', '$rootScope', '$scope', '$http'];

    function ClickController(UserService, $rootScope, $scope, $http) {
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
            recipes();
        }

        function recipes() {
            vm.recipe = [
                {
                    "Name": "Veggie Burger"
                    , "Ingredients": "2 cans(15 oz each) Rosarita® Premium Whole Black Beans, drained, rinsed 1 cup panko bread crumbs 1 / 2 cup Egg Beaters® Original 1 - 1 / 2 teaspoons Cajun seasoning 1 / 4 teaspoon salt 2 tablespoons Pure Wesson® Canola Oil, divided 6 tablespoons guacamole 6 whole wheat hamburger buns 6 slices fresh tomato Purchase ingredients from Peapod or Amazon"
                    , "Directions": "Mash black beans with potato masher in medium bowl until almost smooth.Add bread crumbs, Egg Beaters, Cajun seasoning and salt;mix until blended.Shape mixture into 6 patties, about 1 / 2 - inch thick. Heat 1 tablespoon oil in large skillet over medium - high heat.Add 3 patties;cook 3 minutes on each side or untilset and hot.Remove from skillet;keep warm.Add remaining 1 tablespoon oil and repeat with remaining patties.Remove from heat. Spread 1 tablespoon guacamole on bottom half of each bun.Top each with a patty and 1 tomato slice.Close with tops of buns.Serve immediately."
                    , "image": "/app/assets/images/burger.jpeg"
                }, {
                    "Name": "Smoked Salmon"
                    , "Ingredients": "1 3 - 4 - pound whole salmon fillet 1 cup packed dark-brown sugar 1/2 cup kosher salt 2 tablespoons garlic powder 1 tablespoon plus 1/2 teaspoon ground ginger 2 teaspoons plus 1/2 teaspoon ground cloves 2 teaspoons plus 1/2 teaspoon ground cinnamon 1 jar (8.5 ounces) Chinese plum sauce or hoisin sauce 1 sweet onion, peeled and sliced"
                    , "Directions": "Rinse and pat dry salmon fillet. Place on a large glass platter or dish. In a medium-size bowl, combine the sugar, salt, garlic powder, 1 tablespoon of the ginger, 2 teaspoons of the cloves and 2 teaspoons of the cinnamon. Press sugar mixture, about 1/4-inch thick, onto the fleshy side of the fillet. Cover loosely with plastic wrap and refrigerate for 2 hours. Meanwhile, soak wood chips in warm tap water. Remove fillet from refrigerator. Rinse off rub under cool running water. Dry with paper towels, and let stand at room temp for 20 minutes. Fire up about 7 to 10 pounds charcoal briquettes in bottom of grill. The charcoal is ready when gray and ashy. Reassemble grill, water pan and bottom grate. Pour at least 8 cups hot water into the water pan. Meanwhile, stir the remaining 1/2 teaspoon each of the ginger, cloves and cinnamon into plum sauce. Spread the onion slices onto a disposable foil pan or heavy sheet of aluminum foil large enough to hold fillet, but small enough to fit into smoker. Place fillet, skin side down, on top of onions. Spread top of fillet with plum sauce. Place salmon in heated smoker on top rack. Cover grill. Shake excess water off chips; add to charcoal through side door. Cook for 1-1/2 to 2 hours, or until flesh flakes easily with a fork and registers 140 degrees F on an instant-read thermometer. Top fillet with onions from pan, if desired."
                    , "image": "/app/assets/images/fish.jpeg"
                }, {
                    "Name": "Spicy Oven Baked Chicken"
                    , "Ingredients": "2 tablespoons fresh lemon juice 2 teaspoons ground turmeric 1 1/2teaspoons paprika 1 clove garlic, minced 1/2teaspoon salt 1/2teaspoon ground garam masala 1/4teaspoon ground allspice 1/4teaspoon cayenne pepper 45 ounces bone-in chicken thighs 44 ounces chicken drumsticks 2 teaspoons cooking oil"
                    , "Directions": "In a small bowl combine lemon juice, 1-1/2 teaspoons of the turmeric, the paprika, garlic, salt, garam masala, allspice, and cayenne. Loosen chicken skin slightly and rub spice mixture under skin. Place drumsticks and thighs (skin-side up), in a shallow roasting pan. Combine remaining turmeric and oil; brush on chicken. Cover and chill for 2 to 4 hours. Bake, uncovered, in a 400 degree F oven for 40 to 45 minutes or until a meat thermometer inserted into thickest portion registers 180 degree F. Makes 4 servings."
                    , "image": "/app/assets/images/food2.jpg"
                                }
                , {
                    "Name": "Raspberry Custard"
                    , "Ingredients": "1 1/2 cups whipping cream 3/4 cup sugar 1/2 cup cold water 1 1/2 teaspoons unflavored gelatin 1 8 - ounce carton dairy sour cream 2 teaspoons vanilla Raspberry Sauce (recipe follows) 1 cup fresh raspberries or sliced strawberries 3 cups fresh or frozen raspberries or strawberries, thawed 1/3 cup sugar 1 teaspoon cornstarch1 teaspoon lemon juice"
                    , "Directions": "In a small heavy saucepan, combine whipping cream and sugar. Cook and stir over medium heat until sugar dissolves. Remove from heat; set aside. In another small saucepan, combine water and gelatin. Let stand for 5 minutes to soften. Heat and stir over medium heat till gelatin dissolves. Stir gelatin mixture into whipping cream mixture; transfer to a medium bowl. Stir sour cream and vanilla into cream mixture; mix well. Cover and chill in the refrigerator for 30 to 45 minutes or till mixture thickens like the consistency of yogurt. (Or can place gelatin mixture in a bowl of ice water and chill about 25 to 30 minutes, stirring occasionally.) Layer cream mixture and Raspberry Sauce in each of 6 parfait, martini, or wine glasses, ending with Raspberry Sauce; swirl sauce into the cream with a thin metal spatula. Cover and chill in the refrigerator for at least 2 hours and up to 4 hours. Top with fresh raspberries just before serving. Makes 6 servings. Place 1-1/2 cups raspberries in a blender or food processor. Cover and blend or process till berries are pureed. Press berries through a fine-mesh sieve; discard seeds. Repeat with 1-1/2 cups more berries. (You should have about 1 cup sieved puree.) In a small saucepan, stir together sugar and cornstarch. Add sieved berries and lemon juice. Cook and stir over medium heat till thickened and bubbly. Cook and stir for 2 minutes more. Remove from heat. Cool to room temperature. Makes 1-1/4 cups."
                    , "image": "/app/assets/images/food4.jpg"
                                                }, {
                    "Name": "Chicken Parmasean"
                    , "Ingredients": "1/2 cup whole-wheat bread crumbs 1/3 cup all-purpose flour 2 eggs, slightly beaten 4 thinly sliced boneless, skinless chicken breasts (about 4 ounces each) 2 tablespoons , plus 1 teaspoon olive oil 1 cup marinara sauce 3/4 cup shredded reduced-fat mozzarella cheese 3/4 cup low-sodium chicken broth 4 cloves smashed garlic 1 1/2 pounds green beans 1/2 pound sliced mushrooms 1/8 teaspoon salt 1/8 teaspoon black pepper"
                    , "Directions": "Heat oven to 350 degrees F. Place bread crumbs and flour separately in 2 shallow dishes and the eggs in a shallow bowl. Coat chicken in flour and dip in egg, shaking off excess. Coat with bread crumbs and place on a plate. In a large nonstick skillet, heat 2 tablespoons of the oil over medium-high heat. Saute chicken 2 to 3 minutes per side, until browned. In the bottom of a baking dish, mix 1/4 cup of the marinara sauce with 2 tablespoons water. Place chicken in dish and top each with 3 tablespoons sauce and 3 tablespoons cheese. Bake at 350 degrees F, covered, for 15 minutes. Meanwhile, in a large skillet, simmer broth and garlic, covered, 2 minutes. Add the green beans and mushrooms and simmer, covered, for 5 minutes, until tender. Drain and toss with the remaining teaspoon olive oil and season with salt and pepper. Serve with chicken."
                    , "image": "/app/assets/images/food6.jpg"
                                                }, {
                    "Name": "Juicy Burger"
                    , "Ingredients": "1/4 cup creamy Italian salad dressing 1/4 cup fine dry bread crumbs 1 pound ground beef 4 hamburger buns, split Lettuce Catsup, mustard, pickles, and/or sliced tomatoes"
                    , "Directions": "Preheat the broiler. In a medium mixing bowl combine salad dressing and bread crumbs. Add ground beef and mix well. Shape into four 3/4-inch-thick patties. Place burgers on broiler pan. Broil 3 to 4 inches from the heat for 14 to 18 minutes or until an instant read thermometer inserted in the center registers 160 degree F. Toast buns by broiling, cut side up, about 1 minute. Serve patties on buns with lettuce and condiments. Makes 4 servings."
                    , "image": "/app/assets/images/juicyburger.jpeg"
                                                }, {
                    "Name": "Zesty Salad"
                    , "Ingredients": "6 cups torn mixed salad greens or romaine 2 medium tomatoes, cut into wedges, or 8 cherry tomatoes, halved 1 small cucumber, halved lengthwise and thinly sliced 1 small red onion, cut into thin wedges 1/2 cup pitted kalamata olives 1/2 cup crumbled feta cheese (2 ounces) 1 recipe Greek Vinaigrette 2 small pita bread rounds, cut into wedges (optional)"
                    , "Directions": "In a salad bowl combine salad greens, tomatoes, cucumber, onion, olives, and crumbled cheese. Add Greek Vinaigrette; toss to coat. If desired, serve with pita bread wedges."
                    , "image": "/app/assets/images/salad.jpg"
                                                }, {
                    "Name": "Strawberry Parfait"
                    , "Ingredients": "12 ounces fresh rhubarb, chopped (3 cups) 8 ounces fresh strawberries, chopped (2 cups) 1/2 cup strawberry jam 1 8 ounce package cream cheese, softened 1/2 cup sugar 2 teaspoons vanilla 1 1/2 cups whipping cream Shortbread cookies (optional)"
                    , "Directions": "In a medium bowl stir together rhubarb, strawberries, and strawberry jam. Let mixture stand at room temperature while preparing cream cheese mixture. Meanwhile, for Cheesecake Cream, in a large mixing bowl beat cream cheese, sugar, and vanilla with an electric mixer on medium speed until sugar is dissolved. While beating on medium speed, gradually add whipping cream. Beat until mixture is light and fluffy. Layer about 1/2 cup each fruit mixture and Cheesecake Cream into eight 8-oz. canning jars. Serve right away or cover and chill up to 24 hours. Serve with shortbread cookies, if desired."
                    , "image": "/app/assets/images/sweet1.jpg"
                                                }, {
                    "Name": "Chocolate Layered Cake"
                    , "Ingredients": "1/2 cup unsweetened cocoa powder 2 cups all-purpose flour 1 teaspoon baking powder 1/2 teaspoon baking soda 2/3 cup butter, softened 1 3/4 cups sugar 3 eggs 4 ounces unsweetened chocolate, melted and cooled 2 teaspoons vanilla 1 1/2 cups milk Chocolate curls (optional) Chocolate-Sour Cream Frosting (see recipe below) Fresh raspberries (optional) Fresh mint sprigs (optional)"
                    , "Directions": "Grease three 9-inch round baking pans or three 8x8x2-inch square baking pans; lightly dust each pan with 1 teaspoon of the cocoa powder. In a medium bowl, stir together the remaining cocoa powder, flour, baking powder, and baking soda. Set aside. Preheat oven to 350 degrees F. In a large bowl, beat the butter with an electric mixer on medium to high speed for 30 seconds. Add sugar; beat until combined. Add eggs, one at a time, beating for 30 seconds after each addition. Beat in chocolate and vanilla. Alternately add flour mixture and milk to chocolate mixture, beating on low speed until well mixed. (Batter will be thick.) Divide batter among prepared pans; spread evenly. Bake in the preheated oven for 20 to 25 minutes or until a toothpick inserted near the centers comes out clean. Cool in pans on wire racks for 10 minutes. Remove from pans. Cool completely on wire racks. Make chocolate curls, if using. Arrange curls in an even layer on a parchment or waxed paper-lined tray and set aside in a cool, dry place. To assemble cake, spread Chocolate-Sour Cream Frosting on tops of two of the layers; stack. Add top layer; frost the top and sides of the cake. If desired, while frosting is still moist, use a 4- to 6-inch wooden skewer or tweezers to lightly press chocolate curls into frosting around the bottom two-thirds of the cake. If desired, garnish top with raspberries and mint. Store, covered, in the refrigerator. Makes 12 to 16 servings. "
                    , "image": "/app/assets/images/sweets2.jpeg"
                                                }, {
                    "Name": "Berry Waffles"
                    , "Ingredients": "For Waffles 2 Cups Blueberries, fresh or frozen. 3 Cups Flour 1¾ Cup Almond Milk ¾ Cup Vegetable Oil 2 Tbs Sugar 4 tsp Baking Powder 2 tsp Vanilla Extract 1 tsp Salt For Berry Compote 1 Lb Mixed Berries. I used a bag of frozen that contained blueberries, raspberries, and strawberries. ¼ Cup Sugar 1 Tbs Lemon Juice Optional Coconut Whip 1 Can Coconut Cream or full fat coconut milk. (12 to 14 oz). Refrigerated for at least 4 Hours. ½ Cup Powdered Sugar2 tsp Vanilla extract."
                    , "Directions": "Preheat Waffle Iron. Mix oil, milk, vanilla, and sugar together. Mix flour baking powder, and salt together. Combine wet and dry ingredients. Fold in blueberries. Pour batter onto waffle maker and cook according to your manufacturers directions. Pour mixed berries into a small pot on the stove. Mix in sugar and lemon juice. Cook on low simmer for 10 minutes or so until berry mixture thickens a little. Let cool for a few minutes. Open chilled coconut cream and scoop out thickened cream into a bowl or kitchen aid mixer.. Do not include the small amount of liquid in bottom. Whip coconut cream on medium high with your stand mixer or hand mixture for 3 or 4 minutes until creamy like, well, whip cream. Add powdered sugar and vanilla, and whip until soft peaks begin to form. Top waffles with berry compote and a dollop of whip!"
                    , "image": "/app/assets/images/waffles.jpg"
                                                }, {
                    "Name": "Popcorn Chicken"
                    , "Ingredients": "1 1/2 pounds boneless, skinless chicken breasts, cut into 1-inch pieces 1 tablespoon salt-free Cajun seasoning 1 teaspoon salt 1 cup all-purpose flour 3/4 cup beer 8 pepperoncini peppers 1 quart quart vegetable oil Cocktail sauce and ranch dressing for dipping (optional) Lemon wedges for squeezing (optional)"
                    , "Directions": "Toss chicken with 11/2 tsp of the Cajun seasoning and 1/2 tsp of the salt. In a large bowl, whisk flour, beer and remaining 11/2 tsp Cajun seasoning and 1/2 tsp salt. Toss chicken and peppers in batter and coat completely. In a Dutch oven, heat oil to 375 degrees . Working in 3 batches, drop chicken pieces and peppers into oil, one piece at a time. Fry for 3 minutes, gently stirring halfway through cooking time. With a slotted spoon, remove chicken and peppers from oil and place on a paper-towellined baking sheet. Serve immediately with, if desired, cocktail sauce, ranch dressing and lemon wedges."
                    , "image": "/app/assets/images/popcornChick.jpg"
                                                }, {
                    "Name": "Spaghetti"
                    , "Ingredients": "8 ounces ground beef or bulk pork sausage 1 cup sliced fresh mushrooms or one 6-ounce jar sliced mushrooms, drained 1/2 cup chopped onion (1 medium) 1 clove garlic, minced 1 14 ounce can chicken broth or beef broth 1 3/4 cups water 1 6 ounce can tomato paste 1 teaspoon dried Italian seasoning 1/4 teaspoon black pepper 6 ounces dried spaghetti, broken 1/4 cup grated Parmesan cheese"
                    , "Directions": "In a large saucepan cook the ground beef, fresh mushrooms (if using), onion, and garlic until meat is brown and onion is tender. Drain. Stir in the canned mushrooms (if using), broth, water, tomato paste, Italian seasoning, and pepper. Bring to boiling. Add the broken spaghetti, a little at a time, stirring constantly. Return to boiling; reduce heat. Boil gently, uncovered, for 17 to 20 minutes or until spaghetti is tender and sauce is desired consistency, stirring frequently. Serve with Parmesan cheese. Makes 4 servings."
                    , "image": "/app/assets/images/spagetti.jpg"
                                                }
                ];
        }

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
    }
})();
