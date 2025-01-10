import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.css'; // Import the CSS file
import add from '../assets/icons/maps-and-flags.png';
import wats from '../assets/icons/whatsapp.png';
import twit from '../assets/icons/twitter.png';
import fb from '../assets/icons/facebook.png';
import git from '../assets/icons/github.png';
import link from '../assets/icons/linkedin.png';
import ig from '../assets/icons/instagram.png';
import check from '../assets/icons/check.png';
import cancel from '../assets/icons/cancel.png';


function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState(''); 
  const [isStatusVisible, setIsStatusVisible] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      firstName,
      lastName,
      email,
      message
    }

    try {
      const response = await axios.post('http://localhost:5000/contact', formData);

        if (response.status === 201) {
      setStatus('Thank you! for contacting me .');
      setStatusType('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
      setIsStatusVisible(true); 
    }
  } catch (error) {
    // Custom error handling
    const errorMessage = error.response 
      ? error.response.data.error || 'An unexpected error occurred.'
      : 'Network error. Please try again later.';

    setStatus(errorMessage);
    setStatusType('error');
    setIsStatusVisible(true);
  }
};

useEffect(() => {
  if (isStatusVisible) {
    const timer = setTimeout(() => {
      setIsStatusVisible(false); // Hide after 5 seconds
    }, 15000);
    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }
}, [isStatusVisible]);


  return (
    <div className="contact-container">
  
  
  <div className='contact'>
  <h1 className='h1'>Contact Me</h1>
  
  <div className='contact-item'>
    <img className="img2" src={add} alt="Office Icon" />
    <div className="contact-text">
      <strong>Office</strong>
      <p>No39 Rumuadaolu, Rumuola road PH, Rivers State, Nigeria</p>
    </div>
  </div>
  <div className='contact-divider'></div> 

  <div className='contact-item'>
    <img className="img2" src={wats} alt="WhatsApp Icon" />
    <div className="contact-text">
      <strong>Chat me up or call me!</strong>
      <p> +234 8080531219</p>
    </div>
  </div>
  <div className='contact-divider'></div> 
  <h1 className='h1'>Follow me</h1>
  <div className='contact-item'>
  
    <img className="img2" src={ig} alt="ig" />
    <img className="img2" src={fb} alt="fb" />
    <img className="img2" src={git} alt="git" />
    <img className="img2" src={twit} alt="x" />
    <img className="img2" src={link} alt="link" />
  </div>
  <div className='contact-divider'></div> 

</div>


    <form onSubmit={handleSubmit} className="contact-form">
      <h1>I'm happy to connect with you! What do you have in mind?</h1>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
         {/* Show status message here */}
         {isStatusVisible  && (
          <div className={`status-message ${statusType}`}>
            <img 
              src={statusType === 'success' ? check : cancel} 
              alt={statusType}
              className="status-icon"
            />
            <p>{status}</p>
          </div>
          )}
      </form>
    </div>
  );
}

export default Contact;
