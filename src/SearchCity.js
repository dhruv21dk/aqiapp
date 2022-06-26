import React from 'react';
// import Axios from 'axios';
import {useState} from 'react';
 import { TOKEN, SEARCH_CITIES_BASE_URL } from './AqiConst';
 import {AQIAPI} from './AQIAPI';
 import classes from './Styles.module.css';
 import {List,ListItem,Typography, TextField,Container,Box,Grid} from '@material-ui/core';
 import Button from '@mui/material/Button';
// import CityList from './ShowCity/CityList';
const SearchCity = () =>{
 
  const [url,seturl] = useState('');
  const [city,setcity] = useState('');
  const [cityIsValid,setcityIsValid] = useState(false);
  const [cityIsTouched,setCityIsTouched] = useState(false);
  const searchTextHandler = (event) =>{
       setcity(event.target.value);
 }
  const searchCityHandler = (event) =>{
    setCityIsTouched(true);
    if(city.trim().length===0){
      return;
    }
    setcityIsValid(true);
    event.preventDefault();
    seturl(`${SEARCH_CITIES_BASE_URL}?token=${TOKEN}&keyword=${city}`);
    setcity('');
    
  }
  const cityInputIsInvalid = !cityIsValid&&cityIsTouched;
  const cityInputClasses = cityInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

    return(
    <div>
       
       
       
          <form className={classes.formInline} onSubmit={searchCityHandler}>
           <div >
           <label>
            <TextField
            className = {classes.field}
            id="outlined-basic" 
            variant="outlined"
            type="text"
            autoComplete='off'
            value={city}
             placeholder = "enter city name"
             onChange={searchTextHandler}
            
             />
          {cityInputIsInvalid && (
          <p className={classes.errortext}>Name must not be empty.</p>
        )}
          </label>
         </div>
         <div>
         <Button 
         type="submit"
         variant="contained"
         color="inherit"
         className={classes.button}
         onClick={searchCityHandler}>
           GO
        </Button>
         </div>
       </form>
       <AQIAPI udl = {url} />
        
           
       
    </div>
  );
}
export default SearchCity;
















// import React from 'react';
// import {useState} from 'react';
// import { TOKEN, SEARCH_CITIES_BASE_URL } from './AqiConst';
// import {AQIAPI} from './AQIAPI';
// import Axios from'axios';

// const SearchCity = () => {
//   const [url,setUrl] = useState('');
//   const [searchCity,setSearchCity] = useState('');
//   const[] = AQIAPI(url);

//   const searchHandleText = (event) => {
//   //  event.preventDefault();
//    setSearchCity(event.target.value);
//    console.log(searchCity);
//   }
//   const searchCityName = (event) => {
//     event.preventDefault();
//     setUrl(`${SEARCH_CITIES_BASE_URL}?token=${TOKEN}&keyword=${searchCity}`);
//   }
//   //  const AirQuality = () => {
//   //   Axios.get(url).then((response) =>{
//   //     console.log(response);
//   //   }
//   //   );
//   //  }
//   return(
//     <div>
//        <form onSubmit={searchCityName}>
//          <div>
//          <label>
//           <input>
//             type="text"
//              value={searchCity}
//              placeholder = "enter city name"
//              onChange={searchHandleText}
//           </input>
//           </label>
//           </div>
//           <div>
//           {/* <button onClick={AirQuality}>go</button> */}
//           </div>
//        </form>

//        <AQIAPI  
//           url = {url}
       
//        />

     
//     </div>
//   );
// }
// export default SearchCity;