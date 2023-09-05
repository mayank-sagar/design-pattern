import Visitor from '../Visitor';
import Vistable from '../Vistable'
class Food implements Vistable {
    price = 0;
    name = '';
    
    constructor(name: string, price:number) {
        this.price  = price
        this.name = name
    }

    accept(v: Visitor): number  {
        return v.visitor(this)
    }
}

export default Food;