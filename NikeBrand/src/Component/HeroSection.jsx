import React from "react";
import amazone from "../images/amazone (1).png";
import flipcart from "../images/flipcart.png";
import hero from "../images/hero-imge.png";
export default function HeroSection() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-cntent">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES
          </p>
          <div className="hero-btn">
            <button>Shop NOw</button>
            <button className="second-btn">Category</button>
          </div>
          <div className="shopping">
            <p>Also Available On</p>
          </div>
          <div className="brand-icons">
            <img src={amazone}></img>
            <img src={flipcart}></img>
          </div>
        </div>

        <div className="hero-image">
          <img src={hero}></img>
        </div>
      </div>
    </div>
  );
}
