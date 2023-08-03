import Visitor from '../Visitor';
import Vistable from '../Vistable'
class Services implements Vistable {
    price = 0;
    
    constructor(price:number) {
        this.price  = price
    }

    accept(v: Visitor): number  {
        return v.visitor(this)
    }
}

export default Services;