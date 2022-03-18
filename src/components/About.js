import React from "react";

const About = () => {
  return (
    <div className="about" id="aboutpage">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO</h1>
            <h1>HASHTAG 72</h1>
            <p>
            Hashtag 72,is known for our tasty baked goods, sweets, and cakes. we are a place where you can sit down and enjoy that tailor-made cup of coffee.
            We have everything from classic coffee to our house made specialty beverages.  
            All of our sauces and syrups are made in-house with all natural ingredients (no chemicals or preservatives) ensuring you the highest quality in taste & health.

            We have Fast
            </p>
            <div className="about__btn">
              <a href="#contact" className="btn btn-smart">
                Contact Now
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
