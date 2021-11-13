import {Product} from './products';
import {Model} from './model';

export class NameView{
    products: Product[];
    quantities: number[];

    constructor(model: Model){
        this.products = model.getProducts();
        this.quantities = model.getQuantities();
    }

    public getView(): string{
        let viewString: string = "";

        for (let i = 0; i < this.products.length; i++) {
            viewString += i+": "+this.products[i].getName()+"\n";
        }
        return viewString;
    }

}