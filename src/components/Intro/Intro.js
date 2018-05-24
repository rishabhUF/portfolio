import React from 'react';
import './intro.css';
import TypedJS from 'typed-react-component';
import Scroll from 'react-scroll-to-element';


let props = {
        style: { fontSize: '48px', fontFamily: 'sans-serif' },
        typings: ['web applications...', 'Rest API\'s...', 'web backend services...', 'enterprise applications...', 'cloud solutions...'],
        loop: false,
        typeSpeed: 50,
        backTypeSpeed: 50,
        delay: 2200,
        startDelay: 1200,

    };

const Intro = () => {
	return (
		<header id="Intro" className="sans-serif">
<div className="cover" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1502951682449-e5b93545d46e?ixlib=rb-0.3.5&s=30cadba9a1b6c0676363e4856ff6d273&auto=format&fit=crop&w=1332&q=80)'}}>
    <div className="bg-black-80 pb5 pb6-m pb6-l">
      <nav className="dt w-100 mw8 center"> 
        <div className="dtc w2 v-mid">
          <a shref="/" className="dib w5 h3 pa1 center grow-large">
          <a className="f3 fw4 hover-white code no-underline white-70 dn dib-ns pv2 ph3" href="#Intro" ><i className="fas code fa-terminal"/> Rishabh Sharma</a> 
          </a>
        </div>
      </nav> 
      <div className="tc-l mt4 mt5-m mt6-l ">
        <h1 className="tc f3 f2-m f1-l fw2 white-90">My name is Rishabh. I code and develop</h1>
        <h2 className="tc f4-m fw2 white-80 mt0 lh-copy"> <TypedJS {...Object.assign({}, props, { loop: true })} /></h2>

      </div>
  <Scroll type="id" element="Contact">
  <a className="f3 grow no-underline br-pill ba bw1 code ph3 pv2 mb2 dib white" > Let's Collaborate</a>
</Scroll>
 <br/>
 <br/>
 <br/><br/><br/><br/>
<Scroll type="id" element="Knowhow">
<a><i className="fas v-btm white f4 fa-chevron-down"></i>
</a>
</Scroll> 
      </div>

  </div> 
</header>
	)
};

export default Intro;