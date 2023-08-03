import Visitor from './Visitor';

export default interface Vistable {
    accept(v: Visitor) : number
}