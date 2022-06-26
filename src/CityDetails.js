import React from 'react';
import {useState,useEffect} from 'react';
import Axios from 'axios';
import AiqiDetails from './AiqiDetails';
import { TOKEN, FEED_AQI_BASE_URL} from './AqiConst';
//  import {AQIAPI} from './AQIAPI';

const CityDetails = (props) => {
  const [cdata,setcdata] = useState({});

const durl =(`${FEED_AQI_BASE_URL}${props.id}/?token=${TOKEN}`);
useEffect(() =>{
    if((durl).trim().length===0){
      return;
    }
    Axios.get((durl)).then((response) =>{
      setcdata(response.data.data);
      console.log(response.data.data);
           }
      );

      
    
  }, [durl]);


return(
    <div>
        < AiqiDetails dinfo = {cdata} />
    </div>
);

};
export default CityDetails;