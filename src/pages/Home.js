import React from 'react';
import '../App.scss';
 import {Route, BrowserRouter as Router} from "react-router-dom";
import App from '../App'
import Blob from '../components/atoms/Blob';
import About from '../pages/About'

function Home() {
  return (
      <div>
         <Router>
      <div className="App">
      {/* mobile layout */}
      <Route path="/src/pages/Home.js" component={Home} />
      <Route path="/src/pages/About.js" component={About} />
    </div>
    </Router>
    <App />
    <Blob /> 
    <p>Home page</p>
      </div>
    
    
  );
}

export default Home;
