import heroImg from "../assets/images/jeans.jpg";
import React from 'react'
import "../assets/css/hero.css";
function Hero() {
    const heroSectionStyle={
        "position":"relative"
    }
    const imageContainerStyle={
        "height":"886px",
        "margin":"auto",
    }
    const heroImgStyle={
        "filter": "brightness(70%)",
        "width":"100%",

    }
    const heroText1={
        "position":"absolute",
        "top":"50px",
        "left":"100px"
    }
    const firstPara={
        "font-size":"50px",
        "font-family": "'Ubuntu', sans-serif",
        "font-weight":"bold",
        "text-transform":"uppercase",
        "color":"white"
    }
    const secPara={
        "font-size":"40px",
        "font-family": "'Ubuntu', sans-serif",
        "text-transform":"uppercase",
        "color":"white"
    }
  return (
    <div>
    <div className='hero-section' style={heroSectionStyle}>
        <div className="image-container" style={imageContainerStyle}>
            <img src={heroImg} alt="jeans" srcset="" style={heroImgStyle}/>
        </div>
        <div style={heroText1}>
            <p style={firstPara}>New arrivals</p>
            <p style={secPara}>COLLECTION 2016</p>
        </div>
        <div>
            <button className="shop-btn" >SHOP NOW</button>
        </div>
    </div>
    </div>
  )
}

export default Hero