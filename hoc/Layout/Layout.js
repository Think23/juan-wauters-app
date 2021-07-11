// import { Component } from "react";
import { useState } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";

function Layout(props) {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => {
      return !prevState.setShowSideDrawer;
    });
  };

  return (
    <div style={{backgroundColor:'transparent'}}>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={classes.Content}>{props.children}</main>
    </div>
  );
}

export default Layout;

// class Layout extends Component {
//     state = {
//       showSideDrawer: false,
//     };

//     sideDrawerClosedHandler = () => {
//       this.setState({ showSideDrawer: false });
//     };

//     sideDrawerToggleHandler = () => {
//       this.setState((prevState) => {
//         return { showSideDrawer: !prevState.showSideDrawer };
//       });
//     };

//     render() {
//       return (
//         <>
//           <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
//           <SideDrawer
//             open={this.state.showSideDrawer}
//             closed={this.sideDrawerClosedHandler}
//           />
//           <main className={classes.Content}>{this.props.children}</main>
//         </>
//       );
//     }
//   }

//   export default Layout;
