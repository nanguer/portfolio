import React, { useState } from 'react';
import { Axios, db } from '../firebase/firebaseConfig';

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  const sendEmail = () => {
    const asyncSendEmail = async () => {
      try {
        const res = await Axios.post(
          'https://us-central1-jaguardev1985.cloudfunctions.net/submit',
          formData
        );
        console.log(res);
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
      } catch (e) {
        console.log(e);
      }
    };
    asyncSendEmail();
  };

  return (
    <div className='contact-form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            name='name'
            placeholder='Name'
            onChange={updateInput}
            value={formData.name || ''}
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='email'
            name='email'
            placeholder='Email'
            onChange={updateInput}
            value={formData.email || ''}
          />
        </div>
        <div className='form-group'>
          <textarea
            className='form-control'
            type='text'
            name='message'
            placeholder='Message'
            onChange={updateInput}
            value={formData.message || ''}
          ></textarea>
        </div>
        <div className='form-group'>
          <button type='submit' className=' btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
