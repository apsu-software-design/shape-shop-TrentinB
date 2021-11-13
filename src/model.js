"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
var products_1 = require("./products");
var Model = /** @class */ (function () {
    function Model() {
    }
    Model.prototype.addProduct = function (name, price, description) {
        Model.shopping_cart.push(new products_1.Product(name, price, description));
    };
    Model.prototype.addQuantity = function (quantity) {
        Model.quantity_cart.push(quantity);
    };
    Model.prototype.removeProduct = function (toRemove) {
        Model.shopping_cart.splice(toRemove, 1);
        Model.quantity_cart.splice(toRemove, 1);
    };
    Model.prototype.getProducts = function () {
        return Model.shopping_cart;
    };
    Model.prototype.getQuantities = function () {
        return Model.quantity_cart;
    };
    Model.shopping_cart = [];
    Model.quantity_cart = [];
    return Model;
}());
exports.Model = Model;
