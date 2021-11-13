"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceView = void 0;
var PriceView = /** @class */ (function () {
    function PriceView(model) {
        this.products = model.getProducts();
        this.quantities = model.getQuantities();
    }
    PriceView.prototype.getView = function () {
        var total = 0;
        for (var i = 0; i < this.products.length; i++) {
            total += this.products[i].getPrice() * this.quantities[i];
        }
        return "Shopping Cart Total: " + total;
    };
    return PriceView;
}());
exports.PriceView = PriceView;
