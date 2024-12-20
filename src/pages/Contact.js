import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file
import add from '../assets/icons/maps-and-flags.png';
import wats from '../assets/icons/whatsapp.png';
import twit from '../assets/icons/twitter.png';
import fb from '../assets/icons/facebook.png';
import git from '../assets/icons/github.png';
import link from '../assets/icons/linkedin.png';
import ig from '../assets/icons/instagram.png';


function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, message });
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

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
      <strong>Chat Me Up or call me!</strong>
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
      </form>
    </div>
  );
}

export default Contact;
