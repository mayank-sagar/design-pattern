export enum Navigation {
    DEFAULT = 0,
    ABSTRACT_FACTORY = 1,
    BUILDER = 2,
    ADAPTER = 3,
    CHAIN_OF_RESPONSIBILITY = 4,
    VISITOR = 5
};


export const NAVIGATION = [
    {
        id: Navigation.ABSTRACT_FACTORY,
        label: "Abstract Factory"
    },
    {
        id: Navigation.BUILDER,
        label: "Builder"
    },
    {
        id: Navigation.ADAPTER,
        label: "Adapter"
    },
    {
        id: Navigation.CHAIN_OF_RESPONSIBILITY,
        label: "Chain of responsibility"
    },
    {
        id: Navigation.VISITOR,
        label: "Visitor"
    }
]