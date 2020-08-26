import React,{useRef, useEffect, useState} from 'react'
import './About.scss';
import './Blob.scss';
import './Menu.scss';
import gsap, {Power4, TimelineMax, Power2} from 'gsap'
import $ from "jquery";

function Menu() {

  const [state, setState] = useState({
    active: null
  })

const handleClick = () => {
    setState({
    active: !state.active
})

  }

let bar1, bar2, bar3 = useRef(null)

useEffect(()=>{
    if(state.active === true){
        gsap.to(bar1, 0.4, { x: "+=80px", y: "-=80px", delay: 0.1, ease: Power4.easeIn })
        gsap.to(bar2, 0.4, {  x: "+=80px", y: "-=80px", ease: Power4.easeIn})
        gsap.to(bar3, 0.4, { x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn})
    }else if (state.active.reversed()){
      gsap.to(bar1, 0.4, { x: "+=80px", y: "-=80px", delay: 0.1, ease: Power4.easeIn }).reverse()
        gsap.to(bar2, 0.4, {  x: "+=80px", y: "-=80px", ease: Power4.easeIn}).reverse()
        gsap.to(bar3, 0.4, { x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn}).reverse()
    }
})
    

  return (
      <>
    <span onClick={handleClick} class="menu-trigger">
      <i  ref={(el) => {bar1 = el}}class="menu-trigger-bar top"></i>
      <i ref={(el) => {bar2 = el}}class="menu-trigger-bar middle"></i>
      <i ref={(el) => {bar3 = el}}class="menu-trigger-bar bottom"></i>
    </span>
    <span class="close-trigger">
      <i class="close-trigger-bar left"></i>
      <i class="close-trigger-bar right"></i>
    </span>
    
  </>
    
  );
}

export default Menu;
