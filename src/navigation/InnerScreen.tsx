import { FC, useMemo } from "react";
import { Navigation } from '../constants/variables';
import { menuFactory } from '../MenuFactory';
const InnerScreen: FC<{ id: Navigation}> = ({ id }) => {
    const Screen = useMemo(() => {
        return menuFactory(id);
    },[id])
    return <Screen />
}

export default InnerScreen