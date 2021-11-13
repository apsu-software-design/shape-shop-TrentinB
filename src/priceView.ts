import {Product} from './products';
import {Model} from './model';

export class PriceView{
    products: Product[];
    quantities: number[];

    constructor(model: Model){
        this.products = model.getProducts();
        this.quantities = model.getQuantities();
    }

    public getView(): string{
        let total: number = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].getPrice() * this.quantities[i];
        }
        return "Shopping Cart Total: "+total;
    }
}