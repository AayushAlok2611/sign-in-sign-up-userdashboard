import React from 'react';
import './App.css';
import UserDetailsComponent from './Components/UserDashboard/UserDetailsComponent';
import ImageComponent from './Components/UserDashboard/ImageComponent';
import Navigator from './Components/UserDashboard/NavigationBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WebcamComponent from './Components/UserDashboard/WebcamComponent';
import VideoComponent from './Components/UserDashboard/VideoComponent';
import FaceCombinedComponent from './Components/UserDashboard/FaceCombinedComponent';
import MultipleImageComponent from './Components/UserDashboard/MultipleImageComponent';
import LicenseCombinedComponent from './Components/UserDashboard/LicenseCombinedComponent';
import NewFace from './Components/UserDashboard/NewFaceRecognition';
import NewLicense from './Components/UserDashboard/NewLicense';
import UserForm  from './Components/SignupForm/UserForm';
import Login  from './Components/SignInform/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigator />
      <Switch>
      <Route path='/' exact component={Login}></Route>
      <Route path='/userform' exact component={UserForm}></Route>
      <Route path='/home' exact component={UserDetailsComponent}></Route>
      <Route path='/webcamupload' exact component={WebcamComponent}></Route>
      <Route path='/videoupload' exact component={VideoComponent}></Route>
      <Route path="/facerecog" exact component={NewFace}></Route>
      <Route path="/licenseplaterecog" exact component={NewLicense}></Route>
      <Route path="/imgupload" exact component={MultipleImageComponent}></Route>
      </Switch>
      </Router>

      
     
    </div>
  );
}

export default App;
