import React from "react";
import {Link} from "react-router-dom";
import {FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare, FaYoutubeSquare} from "react-icons/fa";

import {Wrapper, Top, Bottom} from "./styles";

const Footer  = React.memo(()=>{
  
  return (<Wrapper>
  <Top>
    <ul>
      <li>
        Home
        <ul className="sub-list">
          <li><Link to="/">Free Demo</Link></li>
          <li><Link to="/">Log In</Link></li>
          <li><Link to="/">Sign Up</Link></li>
        </ul>
      </li>
      <li>
        Trading
        <ul className="sub-list">
          <li><Link to="/">Features</Link></li>
          <li><Link to="/">Account Types</Link></li>
          <li><Link to="/">Social Trading</Link></li>
          <li><Link to="/">FAQ</Link></li>
        </ul>
      </li>
      <li>
        Education
        <ul className="sub-list">
          <li><Link to="/">Glossary</Link></li>
          <li><Link to="/">Trading Strategies</Link></li>
          <li><Link to="/">Technical Analysis</Link></li>
          <li><Link to="/">Graphical Analysis</Link></li>
          <li><Link to="/">Fundamental Analysis</Link></li>
          <li><Link to="/">Psychology of trading</Link></li>
        </ul>
      </li>
      <li>
        Company
        <ul className="sub-list">
          <li><Link to="/">About Company</Link></li>
          <li><Link to="/">Terms</Link></li>
          <li><Link to="/">Payment Policy</Link></li>
          <li><Link to="/">Return Policy</Link></li>
          <li><Link to="/">Privacy Policy</Link></li>
          <li><Link to="/">AML & KYC</Link></li>
        </ul>
      </li>
    </ul>
    <div className="payment-methods">
      <h3>Payment Methods</h3>
      <div className="content">
        <Link to="/"><FaCcPaypal/></Link>
        <Link to="/"><FaCcMastercard/></Link>
        <Link to="/"><FaCcVisa/></Link>
      </div>
    </div>
  </Top>
  <Bottom>
    <div>&copy; {new Date().getFullYear()} Investar</div>
    <div className="social-media">
      <Link to="/"><FaFacebookSquare/></Link>
      <Link to="/"><FaInstagramSquare/></Link>
      <Link to="/"><FaPinterestSquare/></Link>
      <Link to="/"><FaTwitterSquare/></Link>
      <Link to="/"><FaYoutubeSquare/></Link>
    </div>
  </Bottom>
  </Wrapper>)
})

export default Footer;