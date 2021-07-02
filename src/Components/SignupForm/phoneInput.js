import React, { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';




function PhoneInput(props) {
	const { values, handleChange, hashHandleChange } = props;

	const Continue = (e) => {
		axios
			.post('http://localhost:8888/sendOTP', {
				phone: `${values.phone}`
			})
			.then(function(res) {
				console.log(res.data.otp);
				const hash = res.data.hash;
				hashHandleChange(hash);
			});

		e.preventDefault();
		props.nextStep();
	};
	return (
		<div >
			<div >
				<div style={styling}>
                <MuiThemeProvider>
                <React.Fragment>


                <h2>MOBILE VERIFICATION</h2><br />
                <h3>Step 4 of 5</h3>
					                    
                    <TextField
                    hintText="Enter Your Phone Number"
                    floatingLabelText="Phone Number"
                    onChange={handleChange('vnumber')}
                    defaultValue={values.vnumber}
                    />
                    <br />
                    <Link to="/home"><RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    /></Link>

                    
					
                    
                    </React.Fragment>
                    </MuiThemeProvider>

				</div>
			</div>
		</div>
	);
}
const styles = {
    button: {
      margin:15
    }
  
  }
  
  const styling ={
    paddingLeft:100,
    paddingTop:70  
  }

export default PhoneInput;