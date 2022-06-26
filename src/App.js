import React from 'react';
import { useMediaQuery } from 'react-responsive'
import {Typography} from '@material-ui/core';
import classes from './Styles.module.css';
import SearchCity from './SearchCity';
import  './Citystyles.css';

const App = ()=> {
  
  
 
  return(
    <div>
      <Typography className={classes.heading} variant="h3">Know Air Quality Index(AQI)</Typography>
     
         <SearchCity />
    </div>
    
    );
}
export default App;