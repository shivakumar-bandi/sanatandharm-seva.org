import React from 'react';
import './Donation.css';
import { FaCreditCard, FaPaypal, FaCashRegister } from 'react-icons/fa';
import { SiGooglepay } from 'react-icons/si'; 
import { MdPhone, MdHome } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const BankIcon = () => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h16v2H4V6zm0 4h16v2H4v-2zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" fill="#000"/>
  </svg>
);

const Donation = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="donation-container">
      <button className="go-home-button" onClick={goHome}>
        <MdHome className="home-icon" />
        Go Back Home
      </button>
      <h1>Support Us</h1>
      <p>Select your preferred payment method to make a donation.</p>
      
      <div className="donation-methods">
        <div className="donation-method">
          <FaCreditCard className="icon" />
          <h3>Credit/Debit Card</h3>
          <p>Make a donation using your credit or debit card.</p>
        </div>
        <div className="donation-method">
          <FaPaypal className="icon" />
          <h3>PayPal</h3>
          <p>Donate using your PayPal account.</p>
        </div>
        <div className="donation-method">
          <BankIcon className="icon" />
          <h3>Bank Transfer</h3>
          <p>Transfer your donation directly to our bank account.</p>
        </div>
        <div className="donation-method">
          <FaCashRegister className="icon" />
          <h3>Cash Donation</h3>
          <p>Donate in cash at our office location.</p>
        </div>
        <div className="donation-method">
          <SiGooglepay className="icon" />
          <h3>Google Pay</h3>
          <p>Donate using Google Pay.</p>
        </div>
        <div className="donation-method">
          <MdPhone className="icon" />
          <h3>PhonePe</h3>
          <p>Donate using PhonePe.</p>
        </div>
      </div>
    </div>
  );
};

export default Donation;
