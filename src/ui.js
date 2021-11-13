"use strict";
//User Interface for The Shopping Cart 
//@author James Church
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var model_1 = require("./model");
var nameView_1 = require("./nameView");
var priceView_1 = require("./priceView");
var productView_1 = require("./productView");
// Hey look. It's a global variable. This is totally cool, right?
//let shopping_cart: Product[] = [];
//let quantity_cart: number[] = [];
/**
 * Function to run the UI
 */
function start() {
    showMainMenu();
}
exports.start = start;
/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
    while (true) { //run until we exit
        console.log("Welcome to the Shape Store! We offer the best shapes! Pick an option:\n  1. Add an item to the cart.\n  2. Remove an item to the cart.\n  3. View the items in the cart.\n  4. View the price of all items.\n  5. Quit.");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1':
                addItemToCart();
                break;
            case '2':
                removeItemFromCart();
                break;
            case '3':
                viewItemsInCart();
                break;
            case '4':
                viewCartTotal();
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
function addItemToCart() {
    letUserSelectItem();
    letUserSelectQuantity();
}
function letUserSelectItem() {
    var model = new model_1.Model;
    console.log("Here you can select your shape. Pick an option:\n  1. Buy a Triangle!\n  2. Buy a Square!\n  3. Buy a Pentagon!\n  4. Go back. Don't buy anything.");
    var response = readlineSync.question('> ');
    switch (response) { //handle each response
        case '1':
            model.addProduct("Triangle", 3.5, "It's got three sides!");
            break;
        case '2':
            model.addProduct("Square", 4.5, "It's got four sides!");
            break;
        case '3':
            model.addProduct("Pentagon", 5.5, "It's got five sides!");
            break;
        default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}
function letUserSelectQuantity() {
    var model = new model_1.Model;
    console.log("How many of this shape would you like to purchase?");
    var response = readlineSync.question('> ');
    model.addQuantity(parseInt(response));
    console.log(''); //extra empty line for revisiting
}
function removeItemFromCart() {
    var model = new model_1.Model;
    var names = new nameView_1.NameView(model);
    console.log("Select an item to be removed from the cart.");
    console.log(names.getView());
    /*for (let i = 0; i < shopping_cart.length; i++) {
        console.log(i+": "+shopping_cart[i].getName());
    }*/
    var response = readlineSync.question('> ');
    var toRemove = parseInt(response);
    model.removeProduct(toRemove);
    /*shopping_cart.splice(toRemove, 1);
    quantity_cart.splice(toRemove, 1);*/
    console.log(''); //extra empty line for revisiting
}
function viewItemsInCart() {
    var model = new model_1.Model;
    var products = new productView_1.ProductView(model);
    console.log(products.getView());
    /*for (let i = 0; i < shopping_cart.length; i++) {
        console.log("");
        console.log("       Name: "+shopping_cart[i].getName());
        console.log("      Price: "+shopping_cart[i].getPrice());
        console.log("Description: "+shopping_cart[i].getDescription());
        console.log("   Quantity: "+quantity_cart[i]);
    }*/
}
function viewCartTotal() {
    var model = new model_1.Model;
    var prices = new priceView_1.PriceView(model);
    console.log(prices.getView());
    /*let total: number = 0;
    for (let i = 0; i < shopping_cart.length; i++) {
        total += shopping_cart[i].getPrice() * quantity_cart[i];
    }
    console.log("Shopping Cart Total: "+total);*/
}
