// Modal.js
import React, { useState , useRef }  from 'react';
import './Modal.css';
import emailjs from '@emailjs/browser';
const Modal = ({ show, handleClose, handleSubmit , productDetails }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [email, setEmail] = useState('');
  const speed = productDetails.speed;
  const price = productDetails.price;
  const plan = productDetails.plan;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("asdfg");
    sendEmail();
  
    handleSubmit(event);
  };
//ccff4ff0-6bf1-4da3-82d4-aec002ce04b0
  const sendEmail = () => {
    if(false){
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "grapiculigri4928@yopmail.com",
      Password: "70BA15506B0862ABA50A540B5A9C1E234027",
      Port:2525,

      To: 'grapiculigri4928@yopmail.com',
      From: email,
      Subject: `Order for ${productDetails.plan}`,
      Body: `
        mail sent sy;
      `,
    }).then((message) => alert('Mail sent successfully'));
  }
  emailjs
      .send('service_zs8brag', 'template_r78aw6i', {name:name , email:email, phone :phone, message:message, address:address, plan:plan, speed:speed, price:price}, {
        publicKey: 'XifdcrzZNZhs96haV',
      })
      .then(
        (response) => {
          console.log('SUCCESS!' , response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main"  >
        <h2>Order Form</h2>
        <div className='orderplan'>
        <p>Plan: {productDetails.plan}</p>
        <p>Speed: {productDetails.speed} MBPS </p>
        <p>Price: {productDetails.price}</p>
        </div>
        <form  onSubmit={handleFormSubmit}>
  
          <label>Name:</label>
          <input type="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            
          <label>Email ID:</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Phone Number:</label>
          <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

          <label>Address:</label>
          <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required />

          <label>Message:</label>
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>


          <div className="modal-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClose}>Cancel</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Modal;
