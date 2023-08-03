import { FC } from 'react'
import { NAVIGATION , Navigation} from '../constants/variables'
const MainScreen: FC<{ onNavigationItemSelected: (id: Navigation) =>  void }> = ({ onNavigationItemSelected }) => {
return <>
<ul>
    {NAVIGATION.map((navigationItem) => {
        return (<>
       <li onClick={() => onNavigationItemSelected(navigationItem?.id)}>
        {navigationItem?.label}
        </li> </>)
    })}
</ul>
</>
}

export default MainScreen