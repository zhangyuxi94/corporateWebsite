
(function(){
    angular.module("CorporateApp")
        .controller("mainpageController",mainpageController);

    function mainpageController($routeParams) {
        var vm = this;
        var truckId=$routeParams.tid;

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
                        "The shape is simple, generous and beautiful, strictly environmental designed.",
                        "Reliable LCD digital instrument, friendly interface, easy and accurate for driver to control the vehicle state.",
                        "New steering wheel adjustment mechanism, improve operate comfort and adjustment reliability.",
                        "High-top large diameter intake system is designed to allow the engine to keep out dust, effectively enhance engine performance and increase life expectancy.",
                        "Reliable casting steering axle, low cost in maintenance."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."
                },
                {
                    _id: "13",
                    series:"k",
                    image:"../image/truck_k_3.8.png",
                    name: "K series 3.8t Internal combustion forklifts",
                    feature:[
                        "The shape is simple, generous and beautiful, strictly environmental designed.",
                        "Enhanced wide view mast design makes the driver's field of vision more broad.",
                        "Reliable digital instrument, friendly interface, easy and accurate for driver to control the vehicle state.",
                        "Integral drawing hood, beautiful appearance, high strength.",
                        "Configure wide base tires, increase life expectancy and durable.",
                        "New steering wheel adjustment mechanism, improve operator comfort and adjustment reliability."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."
                },
                {
                    _id: "14",
                    series:"k",
                    image:"../image/truck_k_3.8thuge.png",
                    name: "K series 3.8t Hercules Internal combustion forklifts",
                    feature:[
                        "The new series of forklift with the latest technology, provide you with excellent performance.",
                        "Powerful, faster speed, high efficiency.",
                        "The enhanced wide-view mast design broader the perspective and increase durability.",
                        "High intensity transmission system design with reliable operation and superior performance.",
                        "Configure wide base tires, increase life expectancy and durable.Reliable digital instrument, friendly interface, easy and accurate for driver to control the vehicle state.",
                        "New steering wheel adjustment mechanism, improve operator comfort and adjustment reliability."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."
                },
                {
                    _id: "15",
                    series:"k",
                    image:"../image/truck_k_4-4.5.png",
                    name: "K series 4-4.5t Internal combustion forklifts",
                    feature:[
                        "Full hydraulic steering equipment, small turning radius, light and flexible when steering, safe and reliable.",
                        "High-top large diameter intake system is designed to allow the engine to keep out dust, effectively enhance engine performance and increase life expectancy.",
                        "New steering wheel adjustment mechanism, improve operate comfort and adjustment reliability.",
                        "Low instrument rack and wide view mast design makes the driver's field of vision more broad.",
                        "Smaller front overhang design, effectively reduce the front axle load in full status, greatly improving the life of the front tires and the drive axle."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."
                },
                {
                    _id: "16",
                    series:"k",
                    image:"../image/truck_k_dlsh4.5.png",
                    name: "K series 4.5t Hercules Internal combustion forklifts",
                    feature:[
                        "Full hydraulic steering equipment, small turning radius, light and flexible when steering, safe and reliable.",
                        "High-top large diameter intake system is designed to allow the engine to keep out dust, effectively enhance engine performance and increase life expectancy.",
                        "Low instrument rack and wide view mast design makes the driver's field of vision more broad.",
                        "Reliable digital instrument, friendly interface, easy and accurate for driver to control the vehicle state.",
                        "Smaller front overhang design, effectively reduce the front axle load in full status, greatly improving the life of the front tires and the drive axle.",
                        "Low noise, small vibration, energy saving and environmental protection.",
                        "Advanced manufacturing technology and high-quality components ensure high reliability."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."
                },
                {
                    _id: "17",
                    series:"k",
                    image:"../image/truck_k_5.7.png",
                    name: "K series 5-7t Internal combustion forklifts",
                    feature:[
                        "Wide view mast design makes the driver's field of vision more broad.",
                        "Reliable digital instrument, friendly interface, easy and accurate for driver to control the vehicle state.",
                        "Smaller front overhang design, effectively reduce the front axle load in full status, greatly improving the life of the front tires and the drive axle.",
                        "Low noise, vibration small, energy-saving and environmental friendly.",
                        "Advanced manufacturing technology and high-quality components ensure high reliability."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."
                },
                {
                    _id: "18",
                    series:"k",
                    image:"../image/truck_k_8.5-10.png",
                    name: "K series 8.5-10t Internal combustion forklifts",
                    feature:[
                        "Reliable power system and transmission system, greatly reducing the machine's fault, and several power assist device effectively guarantee the reliability of the system.",
                        "Optimize the intake, exhaust and cooling system, effectively extending engine's life and improve machine's reliability.",
                        "Wide view mast design makes the driver's field of vision more broad.",
                        "Use drum brakes and full hydraulic power brake, making operating more lightweight, comfortable, and reliable."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."
                },
                
                {
                    _id: "21",
                    series:"h",
                    image:"../image/truck_h_ah3t.png",
                    name: "aH series 3t forklifts",
                    feature:[
                        "High-top large diameter intake system is designed to allow the engine to keep out dust, effectively enhance engine performance and increase life expectancy. Wide view mast design makes the driver's field of vision more broad.",
                        "Strict environmental design, heat insulation, sound absorption, good noise reduction.",
                        "Reliable digital instrument, friendly interface, easy and accurate for driver to control the vehicle state."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."
                },
                {
                    _id: "22",
                    series:"h",
                    image:"../image/truck_h_aN3.5t.png",
                    name: "aN series 3-3.5t forklifts",
                    feature:[
                        "High-top large diameter intake system is designed to allow the engine to keep out dust, effectively enhance engine performance and increase life expectancy.",
                        "Advanced manufacturing technology, high-quality components ensure high reliability of the vehicle.",
                        "Wide view mast design makes the driver's field of vision more broad.",
                        "Smaller front overhang design, effectively reduce the front axle load in full status, greatly improving the life of the front tires and the drive axle.",
                        "Reliable digital instrument, friendly interface, easy and accurate for driver to control the vehicle state."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."
                },
                {
                    _id: "23",
                    series:"h",
                    image:"../image/truck_h_euro3.png",
                    name: "H series Euro III forklifts",
                    feature:[
                        "Inline 4-cylinder diesel engine, turbocharged, air to air inter cooler, common rail fuel injection technology.",
                        "Using POC treatment system, after processing sensor sensing system and ECU control, the vehicle is more energy-saving and environmental friendly.",
                        "Meet Euro Ⅲ & US 4F latest emission standards, use electronic throttle control.",
                        "Air filter integrates coarse filter, primary filter and secondary filter to ensure dust discharge continuously, allow the engine to keep out dust, effectively enhance engine performance and increase life expectancy."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."
                },


                {
                    _id: "31",
                    series:"s",
                    image:"../image/truck_s_littleTiger.png",
                    name: "'Little Tiger' series 0.8t forklifts",
                    feature:[
                        "Wide view mast design makes the driver's field of vision more broad.",
                        "Free rising height is high, achieve the in-box function, Cost-effective.",
                        "High-top large diameter intake system is designed to allow the engine to keep out dust, effectively enhance engine performance and increase life expectancy.",
                        "Smaller front overhang design, effectively reduce the front axle load in full status, greatly improving the life of the front tires and the drive axle.",
                        "Reliable digital instrument, friendly interface, easy and accurate for driver to control the vehicle state."
                    ],
                    Occasion:"The product is designed to packet, handle and transport light cargos at factories, warehouses and railway stations."

                },
                {
                    _id: "32",
                    series:"s",
                    image:"../image/truck_s_nh3t.png",
                    name: "New H Series 3t side forklifts",
                    feature:[
                        "New structure design, high body strength, strong bearing capacity, small vibration, low noise.",
                        "Large space cab, comfortable operation and large field of vision.",
                        "The dock has a tilt function, more practical and secure in loading cargo.",
                        "Reliable leg cylinder protection, effectively protect the operation security.",
                        "Four weels hydraulic brake design, higher reliability."
                    ],
                    Occasion:"The product is designed to packet, handle and transport wood, pipe, wire and various elongated cargo at factories, ports, and oil fields."
                },
                {
                    _id: "33",
                    series:"s",
                    image:"../image/truck_s_nh5-6.png",
                    name: "New H Series 5-6t side forklifts",
                    feature:[
                        "New structure design, high body strength, strong bearing capacity, small vibration, low noise.",
                        "Large space cab, comfortable operation and large field of vision.",
                        "The dock has a tilt function, more practical and secure in loading cargo.",
                        "Reliable leg cylinder protection, effectively protect the operation security.",
                        "Four weels hydraulic brake design, higher reliability."
                    ],
                    Occasion:"The product is designed to packet, handle and transport wood, pipe, wire and various elongated cargo at factories, ports, and oil fields."

                },

                {
                    _id: "41",
                    series:"o",
                    image:"../image/truck_o_0.6-1t.png",
                    name: "0.6-1.0t Battery Forklifts",
                    feature:[
                        "New structure design, high body strength, strong bearing capacity, small vibration, low noise.",
                        "Good stability, small turning radius; flexible, high efficiency.",
                        "Wide view mast to ensure that the vision when loading and unloading.",
                        "Good protection function like thermal protection, reverse polarity protection and short circuit protection to ensure the vehicle safety.",
                        "Low noise, no exhaust emissions."
                    ],
                    Occasion:"The products are widely used in supermarkets, railway stations, shopping malls, hotels, textile industry, food processing plants and other flat and small environment, because the shape is compact and small with small turning radius, especially suitable for material transport operations within the narrow space place."

                },
                {
                    _id: "42",
                    series:"o",
                    image:"../image/truck_o_dzc-tl.png",
                    name: "Railway Loading Sachets",
                    feature:[
                        "Small size, compact structure.",
                        "Small turning radius, small size, flexible features.",
                        "Wide view mast to ensure that the vision when loading and unloading.",
                        "Reliable digital instrument, friendly interface, easy and accurate for driver to control the vehicle state.",
                        "Advanced manufacturing technology and high-quality components ensure high reliability."
                    ],
                    Occasion:"The products are widely used in supermarkets, railway stations, shopping malls, hotels, textile industry, food processing plants and other flat and small environment, because the shape is compact and small with small turning radius, especially suitable for material transport operations within the narrow space place."

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
            var newsTitle=[
                {
                    _id: "1",
                    title: "HELI & CHL attended CeMAT Brazil 2015",
                    date:"2015-08-06"
                },
                {
                    _id: "2",
                    title: "HELI Launches European Center",
                    date:"2015-06-15"
                },
                {
                    _id: "3",
                    title: "HELI named No.1 Enterprise for 24th year",
                    date:"2015-02-15"
                },
                {
                    _id: "4",
                    title: "Heli's magnificent appearance at Bauma China 2014",
                    date:"2015-02-04"
                },
                {
                    _id: "5",
                    title: "HELI Loaders are going global",
                    date:"2014-08-29"
                },
                {
                    _id: "6",
                    title: "HELI's new products shown at CeMAT 2014",
                    date:"2014-07-03"
                },
                {
                    _id: "7",
                    title: "HELI brings new products and innovations to CeMAT 2014",
                    date:"2014-06-10"
                },
                {
                    _id: "8",
                    title: "2014 HELI middle east agent conference",
                    date:"2014-03-11"
                }
            ];
            vm.newProducts=newProducts;
            vm.products=products;
            vm.truckId=truckId;
            vm.newsTitle=newsTitle;

            for(var i in products){
                if(truckId===products[i]._id){
                    var singleProduct=products[i];
                }
            }
            vm.singleProduct=singleProduct;
        }
        init();
    }
})();



