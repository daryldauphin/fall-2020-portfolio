import React,{useRef, useEffect} from 'react'
import './About.scss';
import './Blob.scss';
import Button from './About';
import { TweenMax } from "gsap";
import Menu from './Menu';

function Blob() {
  let animatedEl = useRef(null)

  useEffect(()=>{
    TweenMax.from(animatedEl, {duration: 1, y: 150,
     }) 
    })

return (
    <div className="blobDiv">    
      <div className="blob">
        <div ref={(el) => {animatedEl = el}}>
          <h6 >HI THERE !</h6>
            <h3 className="name"><span>I'M</span> DARYL DAUPHIN</h3>
          <p>
            I'm a American based front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
          </p>
              <Button />
        </div>
        <Menu />

      </div>   
    </div>
  );
}

export default Blob;
