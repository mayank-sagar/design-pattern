import Food from "./Food";
import Luxury from "./Luxury";
import Services from "./Services";

export default class Visitor {
    visitor(item: Food): number
    visitor(item: Luxury): number
    visitor(item: Services): number
}