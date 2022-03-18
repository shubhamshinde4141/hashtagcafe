import React from "react";

const Prices = () => {
  return (
    <div className="prices" id="menu-items">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/3.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Birthday Cakes</h1>
              <p className="price__text">
                Beautiful birthday cakes with different flavors and colours are available
                with efficient price ranges.
                You can get other birthday celebration related things like candles, ice-fog, name labels etc.
              </p>
              {/* <p className="price_rs">$50.00</p> */}
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/2.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Beverages</h1>
              <p className="price__text">
              Whether you're looking for the perfect iced tea, a kicked-up lemonade, or a fabulous cold drink, 
              a sip or two from this collection of summer drinks will help when the weather gets hot.
              </p>
              {/* <p className="price_rs">$25.00</p> */}
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza3.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza </h1>
              <p className="price__text">
              Here at Hashtag 72, we serve different types of pizzas. Pizza is one of our most selling fast food category.
              We also have home delivery pizza service.
              You should definitely try once !!
              </p>
              {/* <p className="price_rs">$150.00</p> */}
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/4.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Burgers</h1>
              <p className="price__text">
              Start your day with a burger.
              Burgers so good you’ll come back again and again.
              We have everything you want in a burger.
              </p>
              {/* <p className="price_rs">$22.00</p> */}
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/5.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Cold Coffee</h1>
              <p className="price__text">
              What do you want most from coffee? Thats what you get most from Hashtag 72. 
              Fall in love with coffee all over again. 
              </p>
              {/* <p className="price_rs">$22.00</p> */}
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/6.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Fast Food and Sandwitches</h1>
              <p className="price__text">
              The modern art of making awesome sandwich
              Essence of authenticity in every bite
              Unpacking joy For passionate sandwich lovers
              </p>
              {/* <p className="price_rs">$22.00</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
