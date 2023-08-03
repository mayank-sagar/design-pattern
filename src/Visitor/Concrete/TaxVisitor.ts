import Visitor from "../Visitor"
import Food from "./Food";
import Luxury from "./Luxury";
import Services from "./Services";

export default class TaxVisitor implements Visitor{
    visitor(item: Food): number;
    visitor(item: Luxury) : number;
    visitor(item: Services) : number {
        if(item instanceof Food) {
            return item.price * 0.05
        }

        if(item instanceof Luxury) {
            return item.price * 0.25
        }

        if(item instanceof Services) {
            return item.price * 0.12
        }

        return 0;

    }
    // : number {
    //     return item.price * 0.5;
    // }

    // visitor(item: Luxury): number {
    //     return item.price * 0.25;
    // }

    // visitor(item: Services) : number {
    //     return item.price * 0.12;

    // }

}