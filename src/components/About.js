import React from "react";
import "../assets/css/about.css";
function About() {
  return (
    <div className="about-section">
      <div className="box1">
        <p>Contact</p>
        <p>Questions? Go ahead.</p>
        <form>
          <input type="text" placeholder="Name" />
          <br />
          <input type="email" placeholder="Email" />
          <br />
          <input type="text" placeholder="Subject" />
          <br />
          <input type="text" placeholder="Message" />
          <br />
        </form>
        <button>Submit</button>
      </div>
      <div className="box2">
        <p>About</p>
        <p>About us</p>
        <p>We're hiring</p>
        <p>Support</p>
        <p>Find Store</p>
        <p>Shipment</p>
        <p>Payment</p>
        <p>Gift card</p>
        <p>Return</p>
        <p>Help</p>
      </div>
      <div className="box3">
        <p className="lower-right-heder">Store</p>
        <div className="lower-childs">
          <div className="lower-icon-img">
            <img src={require('../assets/images/tool.png')} alt="" />
          </div>
          <div>
            <p>WearIt</p>
          </div>
        </div>
        <div className="lower-childs">
          <div className="lower-icon-img">
            <img src={require('../assets/images/call.png')} alt="" />
          </div>
          <div>
            <p>987654321</p>
          </div>
        </div>
        <div className="lower-childs">
          <div className="lower-icon-img">
            <img src={require('../assets/images/email.png')} alt="" />
          </div>
          <div>
            <p>wearit@gmail.com</p>
          </div>
        </div>
        <p className="lower-right-heder">We accept</p>
        <div className="lower-childs">
          <div className="lower-icon-img">
            <img src={require('../assets/images/credit-card.png')} alt="" />
          </div>
          <div>
            <p>Debit Card</p>
          </div>
        </div>
        <div className="lower-childs">
          <div className="lower-icon-img">
            <img src={require('../assets/images/credit-card.png')} alt="" />
          </div>
          <div>
            <p>Credit Card</p>
          </div>
        </div>
        <div className="lower-childs">
          <div className="lower-icon-img">
            <img src={require('../assets/images/cash.png')} alt="" />
          </div>
          <div>
            <p>Cash</p>
          </div>
        </div>
        <div className="lower-childs">
          <div className="lower-icon-img">
            <img src={require('../assets/images/operation.png')} alt="" />
          </div>
          <div>
            <p>Online Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
