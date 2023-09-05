import React from "react";
export interface StoreContextProps {
    navComponents: React.JSX.Element[] ,
    setNavContent: (navComponents: React.JSX.Element[]) => void | (() => void)
}
export const StoreContext = React.createContext<StoreContextProps>({
    navComponents: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setNavContent: () => {}
});