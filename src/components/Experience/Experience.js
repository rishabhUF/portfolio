import React from 'react';
import "./experience.css";



const Experience = () => {

  return (
    <div >

      <section className="mw7 center code">
        <h2 className="code ph3 ph0-l">Portfolio</h2>

        <article className="bt pv4 bb b--black-10 ph3">

          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img className="br3 twi" src="https://github.com/rishabhUF/images/blob/master/photos/twi.jpg?raw=true" className="db" alt="" />
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">Distributed Twitter Simulator | Elixir, Pheonix, Javascript, Html, CSS

</h1>
              <p className="f6 f5-l lh-copy">
              Implement a Twitter-like engine in Elixir the functional programming language based on Erlang JSON-based APIs to 
              register, subscribe, send tweets, retweet and search hashtags(e.g. #5615isgreat), mentions with integrated 
              websocket interface.</p>
            </div>
          </div>
        </article>
        <article className="pv4 bt bb b--black-10 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 className="f3 fw1 code mt0 lh-title">CarTracker | Java, Spring, JPA, Hibernate, Docker, AWS EC2, Angular </h1>
              <p className="f6 f5-l lh-copy">
                Developed REST endpoints app in Java SpringMVC for ingestion of mock IOT device on trucks for real time surveillance.

Implemented notification using Java with priority to report to clients of situations and deployed on AWS EC2 instance.

Designed UI in Angular with features such as vehicle's geolocation within last 30 min on a map, details of vehicle etc
        </p>

            </div>
            <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                <img className="br3 twi" src="https://github.com/rishabhUF/images/blob/master/photos/tra.jpg?raw=true"/>

            </div>
          </div>
        </article>

        <article className="bt pv4 bb b--black-10 ph3">
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img className="br3" src="https://github.com/rishabhUF/images/blob/master/photos/coin.jpg?raw=true"/>
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">Distributed Bitcoin Miner | Elixir, Distributed Applicatione</h1>
              <p className="f6 f5-l lh-copy">
                Developed a distributed highly scalable bitcoin miner to mine bitcoins cryptocurrency with specic number of leading zeros.

Used Actor Model in Elixir for achieving more than 790% CPU utilization (8 core machine) with a 7.9 CPU to real time ratio.
        </p>

            </div>
          </div>
        </article>

        <article className="pv4 bt bb b--black-10 ph3 ph0-l">

          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">Tiny URL Clone | Java, Spring, JPA, Hibernate, Docker, AWS EC2</h1>
              <p className="f6 f5-l lh-copy">
                Designed a microservice in which you can pass a URL as a parameter and will receive a shortened URL in the JSON response. 
                When user visits that shortened URL, it will redirect me to the original link. Scaled the application using AWS services like EC2 server.
        </p>
            </div>
            <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                <img className="br3" src="https://github.com/rishabhUF/images/blob/master/photos/tiny.jpg?raw=true"/>
            </div>
          </div>
        </article>

        <article className="bt pv4 bb b--black-10 ph3">

          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img className="br3" src="https://github.com/rishabhUF/images/blob/master/photos/blog.jpg?raw=true"/>
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">BlogPost Application | Java, Spring, JPA, Hibernate, MongoDB</h1>
              <p className="f6 f5-l lh-copy">
                Base Camp is the final project we created in the first online web development bootcamp I enrolled in. It is a simple clone of Yelp! geared towards campgrounds. Using user authentication and RESTful routing practices, Base Camp is a dynamic webpage written in Javascript. Create an account and post a campground to the community!
        </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );



};

export default Experience;