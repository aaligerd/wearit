import React from 'react';
import site_logo from "../assets/images/logo_wearit.png";
import menu_logo from "../assets/images/menu.png";
import searh_logo from "../assets/images/search.png";
import cart_logo from "../assets/images/shopping-cart.png";
import "../assets/css/navbar.css";
function Navbar() {
    const navStyle={
        "padding-top":"5px",
        "display":"flex",
        "fle-wrap":"wrap",
        "justify-content":"space-between",
        "position":"reltive"
    }
    const logoStyle={
        "width":"150px"
    }
    const iconStyle={
        "width":"25px"
    }
    const navRightMenuStyle={
        "width":"100%",
        "min-width":"150px",
        "display":"flex",
        "fle-wrap":"wrap",
        "justify-content":"space-between",
        "align-items":"center",
        // "background-color":"red"
    }
    const menuSlider=()=>{
        let sliderbox=document.getElementById('sliderMenu');
        // let body=document.getElementsByTagName('body');
        if(sliderbox.classList.contains("active")){
            sliderbox.classList.remove('active');
            sliderbox.classList.add('deactive');
            document.body.style.overflow= "visible";
           
        }
        else{
            sliderbox.classList.remove('deactive');
            sliderbox.classList.add('active');
            document.body.style.overflowY= "hidden";
        }
    }
    const searchClick=()=>{
        let searchSection=document.getElementById('search-bigger-section');
        if(searchSection.classList.contains('search-wraper-deactive')){
            searchSection.classList.remove('search-wraper-deactive');
            searchSection.classList.add('search-wraper-active');
        }
        else{
            searchSection.classList.remove('search-wraper-active');
            searchSection.classList.add('search-wraper-deactive');
        }
    }
  return (
    <div style={{position:"relative"}}>
    <nav style={navStyle}>
        <div id='logo-container' style={logoStyle}>
            <img src={site_logo} alt="wearit" style={{width:"100%"}}/>
        </div>
        <div style={{display:"flex"}}>
        <div className='nav-menu-right' style={navRightMenuStyle}>
            <div style={iconStyle}>
                <img src={cart_logo} alt="wearit" style={{width:"100%"}}/>
            </div>
            <div style={iconStyle}>
                <img src={searh_logo} alt="wearit" style={{width:"100%",cursor:"pointer"}} onClick={searchClick}/>
            </div>
            <div style={iconStyle}>
                <img src={menu_logo} alt="wearit" style={{width:"100%",cursor:"pointer"}} onClick={menuSlider}/>
            </div>
        </div>
        
        </div>
    </nav>
    <div id='sliderMenu' className='slider-menu deactive'>
        <div className="slider-logo">
            <p>WearIt</p>
        </div>
        <div className="menu-items">
            <div className="item">
                <p>Shirts</p>
            </div>
            <div className="item">
                <p>Dresses</p>
            </div>
            <div className="item">
                <p>Jeans</p>
            </div>
            <div className="item">
                <p>Jackets</p>
            </div>
            <div className="item">
                <p>Gymwear</p>
            </div>
            <div className="item">
                <p>Blazers</p>
            </div>
            <div className="item">
                <p>Shoes</p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Navbar