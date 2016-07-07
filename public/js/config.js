/**
 * Created by zhangyuxi on 2016/7/6.
 */
(function(){
    angular
        .module("CorporateApp")
        .config(ConfigMainpage);

    function ConfigMainpage($routeProvider){
        $routeProvider
            .when(
                "/products",{
                    templateUrl:"views/products.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/",{
                    templateUrl:"views/mainpage.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .otherwise({
                redirectTo:'/'
            });
    }
})();