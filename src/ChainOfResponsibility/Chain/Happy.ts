import Chain from '../Chain';
import Payload from '../Payload';
class Happy implements Chain {
    nextInChain: Chain | null = null
    setNextInChain(c: Chain) {
        this.nextInChain = c 
    }
    compute(payload: Payload): string {
        if(payload.type === "happy") {
            return "#ffeaa7"
        } else if(this.nextInChain){
            return this.nextInChain.compute(payload)
        }
        return ''
    }

}

export default Happy; 