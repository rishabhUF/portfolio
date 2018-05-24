import React from 'react';
import './knowhow.css'
const Knowhow = () => {
		return(
		<div id="Knowhow" className="mw9 center ph3-ns">
		<header className="tc ph4">
  <h1 className="f3 f2-m f1-l pt1 bold code fw2 black-90 mv3">
    About Me
  </h1>
  <h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
    A Software developer having a strong background in programming with about 2 years of experience working on Backend and Full Stack applications
    I am Knowledgeable and experienced in creating and leading teams to implement software solutions using advanced agile, scrum methodologies and modern design patterns.   
  </h2>
</header>
<h1 className="f3 f2-m f1-l pt52 bold code fw2 black-90 mv3">
    Experience
  </h1>
  <hr/>
  <div className="cf ph0">
    <div className="fl w-100 w-third-ns pa2">
      <div className=" bg-white pv2"></div>
      <div className="f3 bg-white code bold pt4"><img className="br3 aq" src="https://github.com/rishabhUF/images/blob/master/photos/aquent.jpg?raw=true"/>Software Developer</div>
      <main className="pa1 pa1-ns">
   <p className="f6 black-50 copy measure">
     <ul>
   <li>Developing a order management <span className="word-wrap">microservice</span> providing solution to John Deere's client at more at 100 contries.</li>
    <li>Developing  RESTFul Services using the <span className="word-wrap"> following</span> technologies: Java, Maven, Spring  
Framework,  Eclipse,  Jenkins,  Oracle  SQL Developer,  Python, ActiveMQ</li>
    </ul>
   </p>
</main>

    </div>
    <div className="fl w-50  w-third-ns pa2">
      <div className=" bg-white pv2"></div>
      <div className="f3 bg-white code bold pt4"><img className="br3" src="https://github.com/rishabhUF/images/blob/master/photos/Imerza.jpg?raw=true"/> Software Developer</div>
      <main className="pa1 pa1-ns">
   <p className="f6 black-50 copy measure">
     <ul>
   <li>
    Developing a MVVC based web applications for real estate Firm to demonstrate virtual tour on screen using socket programming.
    </li>
    <li>
    Implemented a single page MVC based web application featuring a virtual joystick for virtual reality application control.
    </li>
    </ul>
   </p>
</main>

    </div>
    <div className="fl w-50 w-third-ns tc pa2">
      <div className=" bg-white pv2"></div>
      <div className="f3 bg-white code bold pt4"> <img className="br3" src="https://github.com/rishabhUF/images/blob/master/photos/immersed.jpg?raw=true"/> Software Developer Intern</div>
      <main className="pa1 tc pa1-ns"> 
   <p className="f6 black-50 copy tc measure"><ul>
   <li>
    Conceptualized and developed a parental dashboard in rails and various gems to interface with an educational MMO game.
  </li>
  <li>
    Utilized AWS environment to launch the applications in different regions and implemented Cloud front with AWS Lambda to reduce latency.
  </li>
    </ul>
   </p>
</main>

    </div>
  </div>
</div>
	);
};

export default Knowhow;