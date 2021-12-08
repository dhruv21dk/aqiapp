import React from 'react';
import moment from 'moment';
import useStyles from './Citystyles';
import CityDetails from './CityDetails';
import {List,ListItem,Typography, TextField,Container,Box,Grid} from '@material-ui/core';

const ShowCity = (props) => {  
    const classes = useStyles();
    
    const getCategorizedAQI = (aqi) => {
    const [showDetails, setShowDetails] = useState(false);
      let className = 'unknown';
      let impact = 'Unknown';

      if (aqi >= 0 && aqi <= 50) {
        impact = 'Good';
        className = 'good';
    } else if (aqi >= 51 && aqi <= 100) {
        impact = 'Moderate';
        className = 'moderate';
    } else if (aqi >= 101 && aqi <= 150) {
        impact = 'Unhealthy for Sensitive Groups';
        className = 'unhealthy-sentitive';
    } else if (aqi >= 151 && aqi <= 200) {
        impact = 'Unhealthy';
        className = 'unhealthy';
    } else if (aqi >= 201 && aqi <= 300) {
        impact = 'Very Unhealthy';
        className = 'very-unhealthy';
    } else if (aqi >= 301) {
        impact = 'Hazardous';
        className = 'hazardous';
    }
      
      let catagorized = {};
      catagorized['impact'] = impact;
      catagorized['className'] = className;

      return catagorized;
  };

    const getAtTimeFormatted = time => {
        return moment(time).format('h:mm:ss a');
    }

    return(
      <div >
         <div className = {classes.container} onClick={ () => setShowDetails(!showDetails)}>
             <List>
             <Typography variant= "h6">At { getAtTimeFormatted(props.atTime) }: { props.placeName } - { props.aqi }</Typography>
            <div><Typography variant="h6">{ getCategorizedAQI(props.aqi).impact }</Typography></div>
            { showDetails && <CityDetails uid={ uid } /> }
            </List>
         </div>
</div>


    );
}
export default ShowCity;
