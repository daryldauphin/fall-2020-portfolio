import React from 'react';
import './About.scss';
import './Blob.scss';
import Button from './About';
import Menu from './Menu';

function Blob() {
  return (
    <div className="blobDiv">    
      <Menu />
      <div className="blob">
        <h6>HI THERE !</h6>
        <h1><span>I'M</span> DARYL DAUPHIN</h1>
        <p>
          I'm a American based front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
        </p>
      </div>   

      <Button />
    </div>
  );
}

export default Blob;
