import Food from "../Visitor/Concrete/Food";
import Luxury from "../Visitor/Concrete/Luxury";
import Services from "../Visitor/Concrete/Services";

export const FOODS = [
    {
        type: 'Food',
        children: [
            new Food("Banana",80),
            new Food("Pinapple",120),
            new Food("Guava",90),
            new Food("Orange",100)
        ]
    },
    {
        type: 'Luxury',
        children: [
            new Luxury('I Phone',100000),
            new Luxury('Samsung Galazy S23',230000),
        ]
    },
    {
        type: 'Services',
        children: [
            new Services('Writer',20000),
            new Services('SCO',40000),
        ]
    }
]