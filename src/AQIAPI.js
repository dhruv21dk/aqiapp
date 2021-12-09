import React from 'react';
import {useEffect,useState} from 'react';
import Axios from 'axios';
import CityList from './CityList';
// import CityDetails from './CityDetails';
// import NoDataFound from './NoDataFound';

const AQIAPI = (props) => {
  const [data,setdata] = useState([]);
  useEffect(() =>{
    if((props.udl).trim().length===0){
      return;
    }
    Axios.get((props.udl)).then((response) =>{
           
           setdata(response.data.data);
        }
      );

      
    
  }, [(props.udl)]);

    //  

  return(
    <div>
        
        <CityList cinfo ={data}/>
        {/* <CityDetails dinfo = {data}/> */}
      
        
      
    </div>
  );
    

}
export {AQIAPI};