import React from 'react';

import {Typography, TextField} from '@material-ui/core';

import { makeStyles } from '@mui/styles';

import useStyles from './Styles';
import SearchCity from './SearchCity';

const App = ()=> {
  const classes = useStyles();
 
  return(
    <div>
      <Typography className={classes.heading} variant="h3">Know Air Quality Index(AQI)</Typography>
     
         <SearchCity />
    </div>
    
    );
}
export default App;