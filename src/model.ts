import {Product} from './products';

export class Model {
    private static shopping_cart: Product[] = [];
    private static quantity_cart: number[] = [];

    public addProduct(name: string, price: number, description: string){
        Model.shopping_cart.push(new Product(name, price, description));
    }
    public addQuantity(quantity: number){
        Model.quantity_cart.push(quantity);
    }

    public removeProduct(toRemove: number){
        Model.shopping_cart.splice(toRemove, 1);
        Model.quantity_cart.splice(toRemove, 1);
    }

    public getProducts(): Product[]{
        return Model.shopping_cart;
    }
    public getQuantities(): number[]{
        return Model.quantity_cart;
    }
}