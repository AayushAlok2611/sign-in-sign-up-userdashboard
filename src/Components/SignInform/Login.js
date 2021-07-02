import React from "react";
import {Link,useHistory} from 'react-router-dom';


import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

const Login = () => {
  let history = useHistory();

  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 280,
    margin: "20px auto",
  };

  const avatarStyle = { backgroundColor: "#2979ff" };
  
  const btnstyle = { margin: "8px 0" };
  
  const loginHandler = () => {
    history.push('/home');
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h3>MAPREKS</h3>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={loginHandler}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link to="/userform">Sign Up</Link>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
           
          >
            {" "}
            <GoogleLogin
              clientId="8396-5192-8173 " //we need clientId
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              
            />
            {/* Sign in with google */}
          </Button>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
