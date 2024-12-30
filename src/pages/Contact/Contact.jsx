import React from 'react'
import './Contact.css'
import { CgMail } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact'>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Contact Us</h1>
      <ul className='link-item'>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={{ color: '#3b5998', fontSize: '40px' }} />
            <span className="text">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaSquareInstagram style={{ color: '#E4405F', fontSize: '40px' }} />
            <span className="text">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <FaXTwitter style={{ color: '#1DA1F2', fontSize: '40px' }} />
            <span className="text">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <CiLinkedin style={{ color: '#0077b5', fontSize: '40px' }} />
            <span className="text">LinkedIn</span>
          </a>
        </li>
        <li>
          <CgMail style={{ color: '#D44638', fontSize: '40px' }} />
          <span className="text">support@yogamaya.com</span>
        </li>
      </ul>
      <div className="contact-info">
        <div className='name'>
          <input type="text" placeholder='enter your First name' className='conct' />
          <input type="text" placeholder='enter your last name' className='conct' />
        </div>
        <div className='mail'>
          <input type="text" placeholder='enter your gmail ' className='conct' />
          <select className='conct'>
            <option value=""  >--Select--</option>
            <option value="option1">carrers</option>
            <option value="option2">Feedback</option>
            <option value="option2">Partnerships & Collaborations </option>
            <option value="option2">General Inquiry </option>
          </select>
        </div>
        <div className='text-a'>
          <textarea rows='15' placeholder='Enter Your Text' className='text' cols='80'></textarea>
        </div>
        <div className="btn-sub">
          <button className='btn'>submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
