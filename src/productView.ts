import {Product} from './products';
import {Model} from './model';

export class ProductView {
    products: Product[];
    quantities: number[];

    constructor(model: Model){
        this.products = model.getProducts();
        this.quantities = model.getQuantities();
    }

    public getView(): string{
        let viewString: string = "";
        for (let i = 0; i < this.products.length; i++) {
            viewString += "\n";
            viewString += "       Name: "+this.products[i].getName()+"\n";
            viewString += "      Price: "+this.products[i].getPrice()+"\n";
            viewString += "Description: "+this.products[i].getDescription()+"\n";
            viewString += "   Quantity: "+this.quantities[i]+"\n";
        }
        return viewString;
    }
}