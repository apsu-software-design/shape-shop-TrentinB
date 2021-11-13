"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductView = void 0;
var ProductView = /** @class */ (function () {
    function ProductView(model) {
        this.products = model.getProducts();
        this.quantities = model.getQuantities();
    }
    ProductView.prototype.getView = function () {
        var viewString = "";
        for (var i = 0; i < this.products.length; i++) {
            viewString += "\n";
            viewString += "       Name: " + this.products[i].getName() + "\n";
            viewString += "      Price: " + this.products[i].getPrice() + "\n";
            viewString += "Description: " + this.products[i].getDescription() + "\n";
            viewString += "   Quantity: " + this.quantities[i] + "\n";
        }
        return viewString;
    };
    return ProductView;
}());
exports.ProductView = ProductView;
