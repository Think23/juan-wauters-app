import React from 'react';

import classes from './navRow.module.css';

const navRow = (props) => (
  <>
      <div className="col-3">
          <div className={classes.navegar2} id={props.idOne} onClick={props.click}></div>
      </div>
      <div className="offset-9 col-3">
          <div className={classes.navegar3} id={props.idTwo} onClick={props.click}></div>
      </div>
  </>  
);


export default navRow;

