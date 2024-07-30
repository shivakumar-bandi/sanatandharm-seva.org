import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Team.css';
import { MdPhone, MdHome } from 'react-icons/md';

const teamMembers = [
  {
    name: 'Kamalhasan Devulapally',
    title: 'Founder',
    details: 'Some details about Kamalhasan Devulapally...',
    image: './axios/th.jpg', // Replace with your image path
    social: {
      twitter: 'https://twitter.com/kamalhasan',
      instagram: 'https://instagram.com/kamalhasan',
      facebook: 'https://facebook.com/kamalhasan',
      contact: '+1234567890',
    },
  },
  {
    name: 'Krishna Kumar Rama',
    title: 'Legal Head',
    details: 'Some details about Krishna Kumar Rama...',
    image: './axios/th.jpg', // Replace with your image path
    social: {
      twitter: 'https://twitter.com/krishna',
      instagram: 'https://instagram.com/krishna',
      facebook: 'https://facebook.com/krishna',
      contact: '+1234567891',
    },
  },
  {
    name: 'Srikanth Samala',
    title: 'Administration Head',
    details: 'Some details about Srikanth Samala...',
    image: './axios/th.jpg', // Replace with your image path
    social: {
      twitter: 'https://twitter.com/srikanth',
      instagram: 'https://instagram.com/srikanth',
      facebook: 'https://facebook.com/srikanth',
      contact: '+1234567892',
    },
  },
  {
    name: 'Barath Bandi',
    title: 'Team Head',
    details: 'Some details about Barath Bandi...',
    image: './axios/th.jpg', // Replace with your image path
    social: {
      twitter: 'https://twitter.com/barath',
      instagram: 'https://instagram.com/barath',
      facebook: 'https://facebook.com/barath',
      contact: '+1234567893',
    },
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (member) => {
    setSelectedMember(member === selectedMember ? null : member);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="team-container">
       <button className="go-home-button" onClick={goHome}>
        <MdHome className="home-icon" />
        Go Back Home
      </button>
      <div className="team-row">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-card"
            onClick={() => handleCardClick(member)}
          >
            <div className="team-image" style={{ backgroundImage: `url(${member.image})` }}>
              <div className="team-overlay">
                <h2 className="team-name">{member.name}</h2>
                <p className="team-title">{member.title}</p>
                <div className="team-socials">
                  {member.social.twitter && <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
                  {member.social.instagram && <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
                  {member.social.facebook && <a href={member.social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>}
                  {member.social.contact && <a href={`tel:${member.social.contact}`}><FaPhone /></a>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedMember && (
        <div className="team-details">
          <h2>{selectedMember.name}</h2>
          <p>{selectedMember.details}</p>
          {selectedMember.social && selectedMember.social.contact && (
            <p><FaPhone /> {selectedMember.social.contact}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Team;
