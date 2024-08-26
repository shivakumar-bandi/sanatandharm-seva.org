import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import qrCodeImage from '../../assets/qrcode.png'; // Adjust based on actual structure
import { FaTwitter, FaYoutube, FaPinterest, FaTelegram, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = ({ showDonation }) => {
  return (
    <div className="footer">
      <div className="footer-subscribe">
        <h1>SUBSCRIBE</h1>
        <input type="email" placeholder="Enter your email address" className="subscribe-input" />
        <button className="subscribe-button">Subscribe</button>
        <p>Subscribe to stay tuned for new web design and latest updates. Let's do it!</p>
      </div>
      <div className="footer-main">
        {/* Your original content starts here */}
        <div className="footer-section">
          <h4>Spiritual Terminology</h4>
          <ul>
            <li><a href="#">Spiritual Terminology</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Sanatan Shop</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Terms of use</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Your contribution matters</h4>
          <img src={qrCodeImage} alt="QR Code" className="qr-code" />
          <p>VPA: sanatandharm.org</p>
          <button className="donate-button" onClick={showDonation}>Donate</button>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>contact [at] sanatan [dot] org</p>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="https://youtu.be/IcGRIMPoy_s" target='_blank' rel='noopener noreferrer'><FaYoutube /></a>
            <a href="#"><FaPinterest /></a>
            <a href="#"><FaTelegram /></a>
            <a href="https://www.instagram.com/sanatandharm26378/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://chat.whatsapp.com/G4eXDz6ksPF639KH7zgWIb" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
        {/* Your original content ends here */}
      </div>
    </div>
  );
};

export default Footer;
