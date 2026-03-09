import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router,
        Routes,
        Route } from "react-router-dom"

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(6 8 83)';
      showAlert("Dark Mode has been Enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        message: message,
        type: type
      });

      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }

  const hideAlert = () => {
    setAlert(null);
  }


  return (
    <>
    <Router>
      <Navbar title='Company' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} showAlert={showAlert} hideAlert={hideAlert}/>
      
      <Routes>
        <Route path="/about" element={<About mode={mode} />}/>
        <Route path="/" element={<Textform heading='Enter Text to Analyze' mode={mode} showAlert={showAlert} />}/>
      </Routes>

    </Router>
    </>
  );
}



export default App;
