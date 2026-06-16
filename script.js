let currentProduct = "";

/* MENU */

function openMenu(){

document
.getElementById("sidebar")
.classList.add("active");

}

function closeMenu(){

document
.getElementById("sidebar")
.classList.remove("active");

}

/* PROFILE */

function openProfile(){

document
.getElementById("profilePopup")
.classList.add("active");

}

function closeProfile(){

document
.getElementById("profilePopup")
.classList.remove("active");

}

const clickSound =
new Audio(
"https://www.soundjay.com/buttons/sounds/button-09.mp3"
);

document
.querySelectorAll("button")
.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

clickSound.play();

});

});

/* PRODUCTS */

function scrollProducts(){

document
.getElementById("products")
.scrollIntoView({
behavior:"smooth"
});

}

/* BUY */

function buyProduct(product){

currentProduct = product;

document
.getElementById("checkoutPage")
.classList.add("active");

document
.getElementById("productText")
.innerHTML =
"Product : " + product;

}

/* CLOSE CHECKOUT */

function closeCheckout(){

document
.getElementById("checkoutPage")
.classList.remove("active");

}

/* CONFIRM ORDER */

function confirmOrder(payment){

let location =
document
.getElementById("locationInput")
.value;

if(location === ""){

alert(
"Enter your location"
);

return;

}

document
.getElementById("orderText")
.innerHTML =

currentProduct +

"<br><br>Payment : " +

payment +

"<br><br>Location : " +

location;

alert(
"Order Confirmed Successfully"
);

closeCheckout();

}
function buyProduct(productName) {

const options = {
    key: "rzp_test_Sw09L4agc9chpr",
    amount: 100 * 100,
    currency: "INR",
    name: "JD Bike Accessories",
    description: productName,

    handler: function (response) {

        alert("Payment Successful!");

        console.log(response);

    }

};

const rzp = new Razorpay(options);

rzp.open();

}