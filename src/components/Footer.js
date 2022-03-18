import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  //import { fafacebook } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './style.css'
const Footer = () => {
  return (
      <div id="contact">
          <head>
          <title>Footer Design</title>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="stylesheet" href="css/style.css"/>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
          </head>
          
          <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
            <div className="logo">
          <img src="/img/Hashtag_722.png" alt="logo" />
        </div>
            </div>
            <div class="footer-col">
                <h4>Adddress</h4>
                <ul>
                    <li><a href="#"><i class="fa fa-address-card"></i> Yawat Station Road Corner, Siddheshwar Complex, Shop.No 11 ,412214</a></li>
                    <li><a href="#"><i class="fa fa-phone"></i>   Contact : 9595445673,   9665781111</a></li>
                    <li><a href="#"><i class="fa fa-envelope"></i>   Email : hashtag72@gmail.com</a></li>
                </ul>
            </div>
            {/* <div class="footer-col">
                <h4>online shop</h4>
                <ul>
                    <li><a href="#">watch</a></li>
                    <li><a href="#">bag</a></li>
                    <li><a href="#">shoes</a></li>
                    <li><a href="#">dress</a></li>
                </ul>
            </div> */}
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="https://www.facebook.com/hashtag72cakesandcoffee/"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/hashtag72cakeandcoffee/?hl=en"><i class="fab fa-instagram"></i></a>
                    
                </div>
            </div>
        </div>
    </div>
</footer>
      </div>
    
  );
};

export default Footer;