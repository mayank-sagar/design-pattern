import { FC, useMemo } from "react"
import Calm from "../ChainOfResponsibility/Chain/Calm"
import Happy from "../ChainOfResponsibility/Chain/Happy"
import Sad from "../ChainOfResponsibility/Chain/Sad"
import Chain from "../ChainOfResponsibility/Chain"
import Payload from "../ChainOfResponsibility/Payload"

const RootChainOfResponisibilty: FC<{}>  = ({}) => {
    const chain: Chain = useMemo(() => {
        const calm = new Calm()
        const happy = new Happy()
        const sad = new Sad()
        calm.setNextInChain(happy)
        happy.setNextInChain(sad)
        return calm;
    },[])

    const handleOnChangeSelect = (e: { target: HTMLSelectElement}) => {
        const color = chain.compute(new Payload(e.target.value))
        document.body.style.background  = color
    }
    return <div className="card">
        <div className="card-body">
            <label> Select Your mood. </label> <br/>
            <select onChange={handleOnChangeSelect}>
                <option value="">Select your mood.</option>
                <option value="sad">Sad</option>
                <option value="happy">Happy</option>
                <option value="calm">Calm</option>
            </select>
        </div>
    </div>
}

export default RootChainOfResponisibilty;