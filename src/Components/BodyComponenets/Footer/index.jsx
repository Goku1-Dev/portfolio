// import React from 'react'
import { Instagram, Github, Linkedin, Twitter } from 'lucide-react';
import './index.scss';

const Footer = () => {
  return (
    <div className="profile-container">
      <div className="profile-top">
        <div className="profile-image"></div>
        <div className="profile-info">
          <p>
            I am a self-taught developer & designer from West Bengal,
          </p>
          <h2>Gokul Sureshkumar</h2>
        </div>
        <div className="profile-icons">
          <div className="icon"><Instagram /></div>
          <div className="icon"><Github /></div>
          <div className="icon"><Linkedin /></div>
          <div className="icon"><Twitter /></div>
        </div>
      </div>
      <hr />
      <div className="profile-bottom">
        <p>
          <span role="img" aria-label="wave">Hey👋</span>, my name is <strong>Varun Bhabhra</strong>! I am a self-taught developer & designer from West Bengal,
        </p>
      </div>
    </div>
  );
}

export default Footer;
