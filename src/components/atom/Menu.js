import React,{useRef, useEffect, useState} from 'react'
import './About.scss';
import './Blob.scss';
import './Menu.scss';
import gsap, {Power4, TimelineMax, Power2} from 'gsap'

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
            gsap.to(bar1, 0.4, { x: "+80px", y: "-80px", delay: 0.1, ease: Power4.easeIn })
            gsap.to(bar2,0.4, {  x: "+=80px", y: "-=80px", ease: Power4.easeIn})
            gsap.to(bar3, 0.4, { x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn})
            menuAnimation.play(0)
        }else{
            menuAnimationBack.play(0)
        }
    })
        
    console.clear();
    var menuAnimation = new TimelineMax({paused:true});
    var menuAnimationBack = new TimelineMax({paused:true, reversed: true});
    var navMain = document.getElementById("nav-main");
    var menuButton = document.getElementById("menu-button");
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
            .to(navMain, 0.8, {width: '50%', className : "+=vertical", ease: Power2.easeInOut, transform: "translate3d(0,0,0)"},0);
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
    .to(navMain, 0.55, {width: 0, className : "+=skewback", ease: Power4.easeIn, transform: "translate3d(0,0,0)"},0);
     
   

  return (
      
     <div class="container">
  <span onClick={handleClick} class="menu-trigger">
    <i  ref={(el) => {bar1 = el}}class="menu-trigger-bar top"></i>
    <i ref={(el) => {bar2 = el}}class="menu-trigger-bar middle"></i>
    <i ref={(el) => {bar3 = el}}class="menu-trigger-bar bottom"></i>
  </span>
  <span class="close-trigger">
    <i class="close-trigger-bar left"></i>
    <i class="close-trigger-bar right"></i>
  </span>
  <nav id="nav-main" class="skew">
    <section>Home</section>
</nav>
<button id="menu-button" class="menu-button" >
  <div class="menu-bars" id="menuBox">
	  <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</button>

  
    </div>
  );
}

export default Menu;
