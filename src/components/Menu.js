import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Pizza Menu</h3>
            <h1>You will get all kinds of Pizzas</h1>
            <p>
              Here at Hashtag 72, we serve different types of pizzas. Pizza is one of our most selling fast food category.
              We also have home delivery pizza service.
              You should definitely try once !!
            </p>
            {/* <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
