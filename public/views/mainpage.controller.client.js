/**
 * Created by zhangyuxi on 2016/5/31.
 */
(function(){
    angular.module("CorporateApp")
        .controller("mainpageController",mainpageController);

    function mainpageController($location, $anchorScroll) {
        var vm = this;
        function init() {
            var products=[
                {
                    _id: "11",
                    series:"k",
                    image:"../image/truck_k_1.0-1.8.png",
                    name: "K series 1-1.8t Internal combustion forklifts",
                    feature:[
                        "The shape is simple and smooth, looks very contemporary.",
                        "Integral hood, open freely, noise reduction.",
                        "The steering wheel, seats and instrument racks of the product are well designed in order to guarantee the comfort of the driver's operation.",
                        "High-top large diameter intake system is designed to allow the engine to keep out dust, effectively enhance engine performance and increase life expectancy.",
                        "Advanced manufacturing technology, high-quality components to ensure the reliability of the vehicle."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."
                },
                {
                    _id: "12",
                    series:"k",
                    image:"../image/truck_k_2-3.5.png",
                    name: "K series 2-3.5t Internal combustion forklifts",
                    feature:[
                        "The shape is simple and smooth, looks very contemporary.",
                        "Integral hood, open freely, noise reduction.",
                        "The steering wheel, seats and instrument racks of the product are well designed in order to guarantee the comfort of the driver's operation.",
                        "High-top large diameter intake system is designed to allow the engine to keep out dust, effectively enhance engine performance and increase life expectancy.",
                        "Advanced manufacturing technology, high-quality components to ensure the reliability of the vehicle."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."
                },
                {
                    _id: "21",
                    series:"h",
                    image:"../image/truck_h_ah3t.png",
                    name: "aH series 3t forklifts",
                    feature:[
                        "The shape is simple and smooth, looks very contemporary.",
                        "Integral hood, open freely, noise reduction.",
                        "The steering wheel, seats and instrument racks of the product are well designed in order to guarantee the comfort of the driver's operation.",
                        "High-top large diameter intake system is designed to allow the engine to keep out dust, effectively enhance engine performance and increase life expectancy.",
                        "Advanced manufacturing technology, high-quality components to ensure the reliability of the vehicle."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."
                },
                {
                    _id: "31",
                    series:"s",
                    image:"../image/truck_s_littleTiger.png",
                    name: "'Little Tiger' series 0.8t forklifts"
                },
                {
                    _id: "33",
                    series:"s",
                    image:"../image/truck_s_nh5-6.png",
                    name: "New H Series 5-6t side forklifts"
                 },
                {
                    _id: "41",
                    series:"o",
                    image:"../image/truck_o_0.6-1t.png",
                    name: "0.6-1.0t Battery Forklifts"
                 }
            ];
            var newProducts=[
                {
                    _id: "11",
                    image:"../image/truck_k_1.0-1.8.png",
                    name: "K series 1-1.8t"
                },
                {
                    _id: "12",
                    image:"../image/truck_k_2-3.5.png",
                    name: "K series 2-3.5t"
                },
                {
                    _id: "21",
                    image:"../image/truck_h_ah3t.png",
                    name: "aH series 3t"
                },
                {
                    _id: "31",
                    image:"../image/truck_s_littleTiger.png",
                    name: "'Little Tiger' series"
                },
                {
                    _id: "33",
                    image:"../image/truck_s_nh5-6.png",
                    name: "New H Series 5-6t"
                },
                {
                    _id: "41",
                    image:"../image/truck_o_0.6-1t.png",
                    name: "0.6-1.0t Battery Lift"
                },
            ];
            vm.newProducts=newProducts;
            vm.products=products;
        }
        init();
    }
})();



