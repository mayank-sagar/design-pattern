import Chain from '../Chain';
import Payload from '../Payload';
class Sad implements Chain {
    nextInChain: Chain | null = null
    setNextInChain(c: Chain) {
        this.nextInChain = c 
    }
    compute(payload: Payload): string {
        if(payload.type === "sad") {
            return "#b2bec3"
        } else if(this.nextInChain){
            return this.nextInChain.compute(payload)
        }
        return ''
    }

}

export default Sad; 