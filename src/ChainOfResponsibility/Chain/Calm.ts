import Chain from '../Chain';
import Payload from '../Payload';

class Calm implements Chain {
    nextInChain: Chain | null = null
    
    setNextInChain(c: Chain) {
        this.nextInChain = c as Chain 
    }
    compute(payload: Payload): string {
        if(payload.type === "calm") {
            return "#fd79a8"
        } else if(this.nextInChain){
            return this.nextInChain.compute(payload)
        }
        return ''
    }

}

export default Calm; 