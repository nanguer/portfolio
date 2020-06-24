import React, { useEffect, useContext } from 'react';
import { animateScroll } from '../Animations';
import SocialIcons from './SocialIcons';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { AppContext } from '../../context/AppContext'
import ContactForm from './ContactForm';
import ContactSectionIcons from './ContactSectionIcons';

export default () => {
  const { setCurrentOption } = useContext(AppContext);

  useEffect(() => {
    return () => {
      setCurrentOption('');
    };
  }, [setCurrentOption]);
  const handleScroll = (anchor) => {
    animateScroll(anchor);
  };

  const style = {
    color: '#fff',
  };



  return (
    <div
      className='contact-container'
      style={{
        height: '200vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 1rem',
      }}
    >
      <div className='contact-up' style={{ height: '50%', zIndex: '2' }}>
        <div className='container' style={{ padding: '30vh 4vw' }}>
          <h1 className='contact-title'>Contact</h1>
          <p>
            Feel free to reach out to discuss ideas, projects, or anything !
          </p>
        </div>
        <div
          className='arrow-container d-inline-flex justify-content-end pr-md-5'
          onClick={() => handleScroll('#contact-down')}
        >
          <FaAngleDown size='2em' />
        </div>
      </div>
      <div
        className='container contact-down d-flex flex-column justify-content-between'
        id='contact-down'
        style={{ height: '50%' }}
      >
        <div
          className='arrow-up-contact justify-content-end d-inline-md-flex'
          onClick={() => handleScroll('#top')}
          style={{ zIndex: '2' }}
        >
          <FaAngleUp size='2em' />
        </div>
        <div className='pt-4'>
          <h3 className='contact-title'>Contact Info</h3>
        </div>
        <div className='contact-sections d-flex flex-column flex-md-row flex-wrap justify-content-around'>
          
      <ContactSectionIcons />
          <ContactForm />
        </div>

        <div className='contact-social-icons d-flex justify-content-around justify-content-md-center pb-3 pb-md-0 '>
          <SocialIcons style={style} />
        </div>
        <div></div>
      </div>
    </div>
  );
};
