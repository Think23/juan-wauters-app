import classes from './DrawerToggle.module.css'
import Image from 'next/image'
import burgerMenu from '../../../../static/images/burger-menu.png'

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        {/* <div></div>
        <div></div>
        <div></div> */}
              <Image
        src={burgerMenu}
        alt="burger-menu"
        width="auto" 
        height="100px"
      />
    </div>
);

export default drawerToggle;