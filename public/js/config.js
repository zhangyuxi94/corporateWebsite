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
                "/products/k",{
                    templateUrl:"views/products_k.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/products/h",{
                    templateUrl:"views/products_h.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/products/s",{
                    templateUrl:"views/products_s.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/products/o",{
                    templateUrl:"views/products_o.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/products/truck/:tid",{
                    templateUrl:"views/products_truck.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/aboutUs/intro",{
                    templateUrl:"views/aboutUs_intro.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/aboutUs/culture",{
                    templateUrl:"views/aboutUs_culture.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/aboutUs/news",{
                    templateUrl:"views/aboutUs_news.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/aboutUs/news/1",{
                    templateUrl:"views/aboutUs_news1.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/aboutUs/news/2",{
                    templateUrl:"views/aboutUs_news2.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/aboutUs/news/3",{
                    templateUrl:"views/aboutUs_news3.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/aboutUs/news/4",{
                    templateUrl:"views/aboutUs_news4.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/aboutUs/news/5",{
                    templateUrl:"views/aboutUs_news5.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/aboutUs/news/6",{
                    templateUrl:"views/aboutUs_news6.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/aboutUs/news/7",{
                    templateUrl:"views/aboutUs_news7.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/aboutUs/news/1",{
                    templateUrl:"views/aboutUs_news1.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })

            .when(
                "/technology/rd",{
                    templateUrl:"views/technology_rd.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/technology/equipment",{
                    templateUrl:"views/technology_equipment.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/technology/achievement",{
                    templateUrl:"views/technology_achievement.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/sales/network",{
                    templateUrl:"views/sales_network.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/sales/purchase",{
                    templateUrl:"views/sales_purchase.html",
                    controller:"mainpageController",
                    controllerAs:"model"
                })
            .when(
                "/contactUs",{
                    templateUrl:"views/contactUs.html",
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