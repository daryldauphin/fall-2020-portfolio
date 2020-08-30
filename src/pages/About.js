import React from 'react';
import '../App.scss';
 import {Route, BrowserRouter as Router} from "react-router-dom";
import App from '../App'
import Blob from '../components/atoms/Blob';
import Home from './Home'
function About() {
  return (
      <div>    
          <App />

         <Router>
      <div className="App">
      {/* mobile layout */}
      <Route path="/src/pages/Home.js" component={Home} />
      <Route path="/src/pages/About.js" component={About} />
    </div>
    </Router>
    <Blob />       
    <p style={{ color: 'white' }}>about</p>

      </div>
    
    
  );
}

export default About;
