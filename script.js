let searchbtn = document.querySelector('#search');
let searchfrm = document.querySelector('.head .search-bar');

searchbtn.onclick = () => {
    searchfrm.classList.toggle('active');
    menu.classList.remove('active');
}
// home toggle effect
let menu = document.querySelector('.head .navbar');
document.querySelector('#bars').onclick = () => {
    menu.classList.toggle('active');
    searchfrm.classList.remove('active');
}
window.onscroll = () => {
    menu.classList.remove('active');
    searchfrm.classList.remove('active')
}
// var conceptName = $('#aioConceptName').find(":selected").text();

// $("number").change(function(){
//   alert("The text has been changed.");
// });
// $('#number').on('input',function(e){
//     alert('Changed!')
// }); test
$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
    // get items from form order
    $("#checkout").click(function () {
        let flavour = $("#flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let Toppings = $("#toppings option:selected").val();
        let number = $("#number").val();

        // order of execution
        let order = (flavour, size, crust, topping, number, total) => {
            return { flavour, size, crust, topping, number, total };
        };

        // price checklist
        let price, totalprice;
        switch (flavour) {
            case (flavour = "pepperchicken"):
                switch (size) {
                    case (size = "small"):
                        price = 400;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "medium"):
                        price = 700;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "large"):
                        price = 1500;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                }
                break;
            case flavour = "hawaiian":
                switch (size) {
                    case (size = "small"):
                        price = 400;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "medium"):
                        price = 700;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "large"):
                        price = 1500;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                }
                break;
            case flavour = "beefmushroom":
                switch (size) {
                    case (size = "small"):
                        price = 400;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        }  else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "medium"):
                        price = 700;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        }else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "large"):
                        price = 1500;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                }
                break;
            case flavour = "pepperoni":
                switch (size) {
                    case (size = "small"):
                        price = 400;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "medium"):
                        price = 700;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "large"):
                        price = 1500;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                }
                break;
            case flavour = "cheesetomato":
                switch (size) {
                    case (size = "small"):
                        price = 400;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "medium"):
                        price = 700;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "large"):
                        price = 1500;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                }
                break;
            case flavour = "margherita":
                switch (size) {
                    case (size = "small"):
                        price = 400;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "medium"):
                        price = 700;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "large"):
                        price = 1500;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                }
                break;
            case flavour = "mexicangreen":
                switch (size) {
                    case (size = "small"):
                        price = 400;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "medium"):
                        price = 700;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                    case (size = "large"):
                        price = 1500;
                        if (crust === "thin") {
                            totalprice = price * number + 100;
                        } else if (crust === "crispy") {
                            totalprice = price * number + 250;
                        } else if (crust === "gluten") {
                            totalprice = price * number + 300;
                        } else {
                            totalprice = price * number + 380;
                        }
                        break;
                }
                break;
        }
        switch (Toppings) {
            case Toppings = "tomato":
                totalprice = totalprice + 100;
                break;
            case topping = "onions":
                totalprice = totalprice + 100;
                break;
            case topping = "greenpepper":
                totalprice = totalprice + 100;
                break;
            case topping = "olives":
                totalprice = totalprice + 100;
                break;
            case topping = "pineapple":
                totalprice = totalprice + 150;
                break;
            case topping = "sweetcorn":
                totalprice = totalprice + 150;
                break;
            case topping = "wheatthin":
                totalprice = totalprice + 150;
                break;
            case topping = "mushroom":
                totalprice = totalprice + 150;
                break;
            case topping = "beef":
                totalprice = totalprice + 200;
                break;
            case topping = "chicken":
                totalprice = totalprice + 200;
                break;
        }
        let newOrder = order(flavour, size, crust, topping, number, totalprice);
        console.log(newOrder);

        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('#deliver').show(1000);
        $('#delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " 
           + newOrder.flavour + "<br>" + "Size :   "
            + newOrder.size + "<br>" + "Crust :     "
            + newOrder.crust + "<br>" + "Toppings :     "
            + newOrder.topping + "<br>" + " Number of pizzas :    "
            + newOrder.number + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });
    $("#deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('#deliver').hide(1000);
        $('#delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });
    // $("#delivernot").click(function () {

    // });
 

});
