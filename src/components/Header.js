import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner" id="homepage">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h1>Hashtag 72</h1>
            <p>
            Cake and Coffee shop for foddies with Exceptional Taste, Exceptional Price
            </p>
            <div className="banner__btn">
              <a href="#menu-items" className="btn btn-smart">
                See Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
