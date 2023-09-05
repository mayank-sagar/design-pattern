import { FC } from 'react'
import { NAVIGATION , Navigation} from '../constants/variables'
import classes from './styles.module.css'
const MainScreen: FC<{ onNavigationItemSelected: (id: Navigation) =>  void }> = ({ onNavigationItemSelected }) => {
return <>
<div className={classes.mainScreenBackground}></div>
<ul className={classes.mainScreenContainer}>
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