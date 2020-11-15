import React, {useEffect, useRef} from "react";
import "../styles/styles.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';

import imgGirl from "../images/girl.webp";
import imgBoy from "../images/boy.webp";

function App() {
    let app = useRef(null);
    let images = useRef(null);
    let content = useRef(null);
    let tl = new TimelineLite({delay: 0.8});

    useEffect(() => {
        // Images Vars   
        const girlImage = images.firstElementChild; // or children[0]
        const boyImage = images.lastElementChild;

        // Content Vars
        // h1
        const headlineFirst = content.children[0].children[0]
        const headlineSecond = headlineFirst.nextSibling;
        const headlineThird = headlineSecond.nextSibling;
        // p
        const contentP = content.children[1];
        // button
        const contentButton = content.children[2];

        TweenMax.to(app, 0, {css: {visibility: 'visible'}})
        
        // Images Animation
        tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut}, 'img+title') // Initial state + Css styling end state
        .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2) // , 2, = duration | .2 = delay
        tl.from(boyImage, 1.2, {y: 1280, ease: Power3.easeOut}, .2) // Initial state + Css styling end state
        .from(boyImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2) // , 2, = duration | .2 = delay

        // Content Animation
        tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
            y: 44,
            ease: Power3.easeOut,
            delay: .8
        }, .15, 'img+title')
        .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
        .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
    });

  return (
    <div ref={el => app = el} className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div ref={el => content = el} className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of disease caused</div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">Explore
                  <div className="arrow-icon">
                  <i class="fas fa-arrow-right"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div ref={el => images = el} className="hero-images-inner">
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;