"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameView = void 0;
var NameView = /** @class */ (function () {
    function NameView(model) {
        this.products = model.getProducts();
        this.quantities = model.getQuantities();
    }
    NameView.prototype.getView = function () {
        var viewString = "";
        for (var i = 0; i < this.products.length; i++) {
            viewString += i + ": " + this.products[i].getName() + "\n";
        }
        return viewString;
    };
    return NameView;
}());
exports.NameView = NameView;
