import {Navigation} from '../constants/variables'
import RootAbstractFactory  from '../rootComponents/RootAbstarctFactory'
import RootBuilder  from '../rootComponents/RootBuilder'
import RootAdapter  from '../rootComponents/RootAdapter'
import RootChainOfResponsibility  from '../rootComponents/RootChainOfResponsibility'

import React  from 'react';
export const menuFactory = (id: Navigation) => {
    switch(id) {
        case Navigation.ABSTRACT_FACTORY:
            return RootAbstractFactory; 
        case Navigation.BUILDER: 
            return RootBuilder;
        case Navigation.ADAPTER: 
            return RootAdapter;
        case Navigation.CHAIN_OF_RESPONSIBILITY:
            return RootChainOfResponsibility;
    }
    return React.Fragment;
}