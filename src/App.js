// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const togglemode = () =>{
    if(mode==='dark'){
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled", "success")  
      document.title="TextUtils- Light Mode"

      // setInterval(() => {
      //   document.title="TextUtils created by : Gaurav"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils"
      // }, 1500);
    }      
    else{
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled", "success")
      document.title="TextUtils- Dark Mode"
    }
  }
  return (
  <>
  <Router>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <About/> */}
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
      </Routes>
    </div>
  </Router>
  </>
);
}

export default App;
