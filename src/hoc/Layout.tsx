import { FC, useState } from "react";
import { Navigation } from "../constants/variables";
import classes from './style.module.css'
import {StoreContext,StoreContextProps} from '../store/StoreContext';

const Layout:FC<{ setId: (id: Navigation) => void, children : any }> = ({ setId , children }) => {
    
    const updateNavComponets = (navElements: React.JSX.Element[]) => {
        setState((prev) => ({...prev, navComponents: navElements}))
    }

    const [state,setState] = useState<StoreContextProps>({
        navComponents: [],
        setNavContent: updateNavComponets
    })

return (
    <StoreContext.Provider value={state}>
    <div className={`container ${classes.layout}`}>
        <div className="navbar">
           <button className="btn btn-primary" onClick={() => setId(Navigation.DEFAULT)}> Back </button>
            {state?.navComponents ?? ''}
        </div>
        {children}
    </div>
    </StoreContext.Provider>
)
}

export default Layout; 