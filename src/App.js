import React from 'react';
import './App.css';
import InputExcel from './components/InputExcel';
import AboutMe from './components/AboutMe';
function App() {
  
  return (
    <React.Fragment>
      <p className="lm-gl">LM, GL</p>
      <InputExcel/>
      <AboutMe/>
    </React.Fragment>
  );
}

export default App;
