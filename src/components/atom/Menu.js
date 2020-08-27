import React, { useRef, useEffect, useState } from "react";
import "./About.scss";
import "./Blob.scss";
import "./Menu.scss";
import { gsap } from "gsap";

function Menu() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const bar1 = useRef();
  const bar2 = useRef();
  const bar3 = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({
        paused: true,
        defaults: {
          ease: "power4.in",
          duration: 0.4,
          
        }
      })
      .to(bar1.current, { x: "+=80", y: "-=80" }, 0.1)
      .to(bar2.current, { x: "+=80", y: "-=80" }, 0)
      .to(bar3.current, { x: "+=80", y: "-=80" }, 0.2)
    return () => tl.current.kill();
  }, []);

  useEffect(() => {
    if (active) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [active, tl]);

  return (
    <>
      <span onClick={handleClick} className="menu-trigger">
        <i ref={bar1} className="menu-trigger-bar top"></i>
        <i ref={bar2} className="menu-trigger-bar middle"></i>
        <i ref={bar3} className="menu-trigger-bar bottom"></i>
      </span>
      
    </>
  );
}

export default Menu;