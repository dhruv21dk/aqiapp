import { makeStyles } from '@mui/styles';

export default makeStyles(() =>({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 55,
    padding: '0 50px',
    position: 'absolute',
    top: 180,
    left: 500,
  },
  heading: {
    textAlign: 'center',
    position: 'absolute',
    right: 15, 
    left: 15,
    top: 100,
  },
  field: {
    alignContent: 'center',
    position: 'absolute',
    right: 15, 
    left: 480,
    top: 180,

  },
  button: {
    textAlign: 'center',
    position: 'absolute',
    right: 15, 
    left: 750,
    top: 135,
    padding: ' 28px 0px 28px 0px',
    
  
  },
  formControlInvalid: {
    border: '1px solid #b40e0e',
    backgroundcolor: '#fddddd',
  },
  formControl: {
    outline: 'none',
  bordercolor: '#240370',
  backgroundcolor: '#e0d4fd',
  },
  errortext: {
    color: '#b40e0e',
  },


}));