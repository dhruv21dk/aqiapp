import React from 'react';
import {useEffect,useState} from 'react';
import Axios from 'axios';
import CityList from './CityList';
// import CityDetails from './CityDetails';
// import NoDataFound from './NoDataFound';

const AQIAPI = (props) => {
  const [data,setdata] = useState([]);
  const [ddata,setddata] = useState([]);
  useEffect(() =>{
    if((props.udl).trim().length===0){
      return;
    }
    Axios.get((props.udl)).then((response) =>{
             console.log(response.data);
           
           setdata(response.data.data);
        }
      );

      
    
  }, [(props.udl)]);
  
  
  // useEffect(() =>{
  //   if((props.dudl).trim().length===0){
  //     return;
  //   }
  //   Axios.get((props.dudl)).then((response) =>{
  //        console.log(response.data.ddata);
           
  //         //  setdata(response.data.data);
  //       }
  //     );

      
    
  // }, [(props.dudl)]);

    //  

  return(
    <div>
        
        <CityList cinfo ={data}/>
        {/* <CityDetails dinfo = {data}/> */}
      
        
      
    </div>
  );
    

}
export {AQIAPI};