import { FC } from "react";
import { Navigation } from "../constants/variables";

const Layout:FC<{ setId: (id: Navigation) => void, children : any }> = ({ setId , children }) => {
return (
    <div>
        <div className="navbar">
            <button className="btn" onClick={() => setId(Navigation.DEFAULT)}> Back </button>
        </div>
        {children}
    </div>
)
}

export default Layout; 