import React from 'react';
import './App.css';
import UserDetailsComponent from './Components/UserDetailsComponent';
import ImageComponent from './Components/ImageComponent';
import Navigator from './Components/NavigationBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WebcamComponent from './Components/WebcamComponent';
import VideoComponent from './Components/VideoComponent';
import FaceCombinedComponent from './Components/FaceCombinedComponent';
import MultipleImageComponent from './Components/MultipleImageComponent';
import LicenseCombinedComponent from './Components/LicenseCombinedComponent';
import NewFace from './Components/NewFaceRecognition';
import NewLicense from './Components/NewLicense';
import UserForm  from './Components/UserForm';
import Login  from './Components/Login';


function App() {
  return (
    <div className="App">
      <Router>
      <Route path='/' exact component={Login}></Route>
      <Route path='/userform' exact component={UserForm}></Route>
      <Switch>
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
