import { FC, useMemo, useState } from "react";
import { UserAdapter } from "../Adapter/UserAdapter";

const RootAdapter: FC<{}> = ({}) => {
    const [value,setValue] = useState<string>('');
    const [isTouched,setIsTouched] = useState<boolean>(false);

    const  isValid = useMemo(() => {
        return new UserAdapter(value).isValidResource()
    },[value])

    return (<div>
        <input onBlur={() => setIsTouched(true)} value={value} onChange={(e) => setValue(e.target.value)} type="text"></input>
        {isTouched && !isValid ? <span> Username is not valid </span>: null}
    </div>)
}

export default RootAdapter; 