import Payload from './Payload'

export default interface Chain {
    setNextInChain(c: Chain): void
    compute(payload: Payload) : string
}

