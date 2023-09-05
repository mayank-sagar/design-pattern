import { FC, useMemo, useState } from "react";
import { UserAdapter } from "../Adapter/UserAdapter";

const RootAdapter: FC<{}> = ({}) => {
    const [value,setValue] = useState<string>('');
    const [isTouched,setIsTouched] = useState<boolean>(false);

    const  isValid = useMemo(() => {
        return new UserAdapter(value).isValidResource()
    },[value])

    return (<div className="card">
        <div className="card-body">
        <label>Username</label><br/>
        <input 
        placeholder="Enter User name..."
        onBlur={() => setIsTouched(true)} value={value} onChange={(e) => setValue(e.target.value)} type="text"></input>
        {isTouched && !isValid ? <span> Username is not valid </span>: null}
        </div>
    </div>)
}

export default RootAdapter; 