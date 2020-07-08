import React from "react";
import {FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare, FaYoutubeSquare} from "react-icons/fa";

import {Wrapper, Top, Bottom} from "./styles";

export default function Footer(){
  return (<Wrapper>
  <Top>
    <ul>
      <li>
        Home
        <ul className="sub-list">
          <li>Free Demo</li>
          <li>Log In</li>
          <li>Sign Up</li>
        </ul>
      </li>
      <li>
        Trading
        <ul className="sub-list">
          <li>Features</li>
          <li>Account Types</li>
          <li>Social Trading</li>
          <li>FAQ</li>
        </ul>
      </li>
      <li>
        Education
        <ul className="sub-list">
          <li>Glossary</li>
          <li>Trading Strategies</li>
          <li>Technical Analysis</li>
          <li>Graphical Analysis</li>
          <li>Fundamental Analysis</li>
          <li>Psychology of trading</li>
        </ul>
      </li>
      <li>
        Company
        <ul className="sub-list">
          <li>About Company</li>
          <li>Terms</li>
          <li>Payment Policy</li>
          <li>Return Policy</li>
          <li>Privacy Policy</li>
          <li>AML & KYC</li>
        </ul>
      </li>
    </ul>
    <div className="payment-methods">
      <h3>Payment Methods</h3>
      <div className="content">
        <FaCcPaypal/>
        <FaCcMastercard/>
        <FaCcVisa/>
      </div>
    </div>
  </Top>
  <Bottom>
    <div>&copy; {new Date().getFullYear()} Investar</div>
    <div className="social-media">
      <FaFacebookSquare/>
      <FaInstagramSquare/>
      <FaPinterestSquare/>
      <FaTwitterSquare/>
      <FaYoutubeSquare/>
    </div>
  </Bottom>
  </Wrapper>)
}