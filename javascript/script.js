// function change some style and redirect browser to login page
function change(){
    document.getElementById("btn").style.border = "2px solid rgb(255, 136, 136)";
    document.getElementById("btn").style.backgroundColor = "rgb(255, 212, 212)";
    document.location = "login.html";
}

// function used authenticate credential on login page
function authenticate(){
    // get username and password from login form
    let username = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;
    
    // check given credential
    if (username.length != 0 && password.length != 0){
        if (username === "admin@admin.com" && password === "123456") {
            window.alert("Login Successful")
        }
        else {
            window.alert("Invalid username or password")
        }
    }
}

// change item-price and total-price as per quantity
function itemPrice(quantity){
    let price = 38;
    let totalCost = price * quantity;
    let elements = document.querySelectorAll('p.price');
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = '$' + totalCost;
        document.getElementById("total").innerText = '$' + (totalCost + 5);
    }
}

// increment quantity input when function called
function increment(){
    // get current quantity and change its data-type to int
    let quantity = document.getElementById("quantity").value;
    quantity = parseInt(quantity);

    // check for quantity and then increment its value
    if (quantity < 10){
        quantity = quantity + 1;
        document.getElementById("quantity").value = quantity;
        itemPrice(quantity);
    }
}

// decrement quantity input when function called
function decrement(){
    // get current quantity and change its data-type to int
    let quantity = document.getElementById("quantity").value;
    quantity = parseInt(quantity);

    // check for quantity and then decrement its value
    if (quantity > 1){
        quantity = quantity - 1;
        document.getElementById("quantity").value = quantity;
        itemPrice(quantity);
    }
}