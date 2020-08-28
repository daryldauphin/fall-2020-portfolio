import React, { useRef, useEffect, useState } from "react";
import "./About.scss";
import "./Blob.scss";
import "./Menu.scss";
import { gsap, TimelineMax, Power2, Power4 } from "gsap";
import { render } from "react-dom";

// get our fontawesome imports
import { faHome, faUser, faFolderOpen, faEnvelopeOpen, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    toggle = !toggle;
  };

  const bar1 = useRef();
  const bar2 = useRef();
  const bar3 = useRef();
  const tl = useRef();
  var menuAnimation = new TimelineMax({paused:true});
  var menuAnimationBack = new TimelineMax({paused:true, reversed: true});
  
  useEffect(() => {
    tl.current = gsap
      .timeline({
        paused: true,
        defaults: {
          ease: "power4.in",
          duration: 0.9,
          
        }
      })
      .to(bar1.current, { x: "+=80", y: "-=80" }, 0.1)
      .to(bar2.current, { x: "+=80", y: "-=80" }, 0)
      .to(bar3.current, { x: "+=80", y: "-=80" }, 0.2)
      .reverse(0); 
    return () => tl.current.kill();
  }, []);

  useEffect(() => {
    if (active) {
      tl.current.play().reverse(2);
      menuAnimation.play(0)
    } else {
      menuAnimationBack.play(0)
      tl.current.reverse(0);
    }
  }, [active, tl, menuAnimation, menuAnimationBack]);


  console.clear();
  
  var navMain = document.getElementById("nav-main");
  var toggle = true;
  var mqls = [
   window.matchMedia("(min-width: 769px)"),
   window.matchMedia("(min-width: 581px) and (max-width: 768px)"),
   window.matchMedia("(max-width: 580px)")
  ]
  
  function mediaqueryresponse(mql){
      if (mqls[0].matches){
      menuAnimation
          .to(navMain, 0.8, {width: '100%', className : "+=vertical", ease: Power2.easeInOut, transform: "translate3d(0,0,0)"},0);
      }
      if (mqls[1].matches){
          menuAnimation
          .to(navMain, 0.8, {width: '100%', className : "+=vertical", ease: Power2.easeInOut, transform: "translate3d(0,0,0)"},0);
      }
      if (mqls[2].matches){
          menuAnimation
          .to(navMain, 0.8, {width: '100%', className : "+=vertical", ease: Power2.easeInOut, transform: "translate3d(0,0,0)"},0);
      }
  }
  
  for (var i=0; i<mqls.length; i++){
   mediaqueryresponse(mqls[i])
   mqls[i].addListener(mediaqueryresponse)
  }
  
  menuAnimationBack
  .to(navMain, 0.55, {width: 0, className : "+=skewback", ease: Power4.easeIn, transform: "translate3d(0,0,0)"},0)
   
 
  

  return (
    <>
      <span onClick={handleClick} className="menu-trigger">
        <i ref={bar1} className="menu-trigger-bar top"></i>
        <i ref={bar2} className="menu-trigger-bar middle"></i>
        <i ref={bar3} className="menu-trigger-bar bottom"></i>
        </span>
        
        <nav id="nav-main" class="skew">      

         <section>
         <FontAwesomeIcon icon={faHome}/>
           <h1 id="home">Home</h1>
           <FontAwesomeIcon icon={faUser}/>
           <h1  id="about">About</h1>
           <FontAwesomeIcon icon={faFolderOpen}/>
           <h1  id="portfolio">Portfolio</h1>
           <FontAwesomeIcon icon={faEnvelopeOpen}/>
           <h1  id="contact">Contact</h1>
           <FontAwesomeIcon  icon={faComment}/>
           <h1  id="blog">Blog</h1>
           {/* <FontAwesomeIcon icon={faHome} /> */}

           </section>
        </nav>
   <button id="menu-button" class="menu-button">
        <div class="menu-bars" id="menuBox">
        </div>
  </button>


      
    </>
  );
}

export default Menu;