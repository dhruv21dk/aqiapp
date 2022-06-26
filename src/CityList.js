import React from 'react';
import ShowCity from './ShowCity';
import classes from './Styles.module.css';
// import './CityStyles.css';
import CityStyles from './Citystyles.css';
// import NoDataFound from './NoDataFound';
// import { StylesContext } from '@material-ui/styles';
// import {useState,useEffect} from 'react';

const CityList = (props) =>{
  let cityData = [];
  if(props.cinfo){
    cityData = props.cinfo;
  }

  
    // if(props.cinfo.length===0){
    //     return <h2>Found no data!!</h2>
    // }
   
    
    return (
        <ul>
          
          {
          cityData.map((data) => (
            <ShowCity 
            
             aqi = {data.aqi}
             placeName = {data.station.name}
             atTime = {data.time.stime}
             uid = {data.uid}
            
            />
        
        ))
        }
          
        
        </ul>
      );
    };



export default CityList;