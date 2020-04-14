import React, { useEffect, useContext } from 'react';
import { animateScroll } from './Animations';
import SocialIcons from './SocialIcons';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaAngleDown, FaAngleUp, FaPhone, FaCode } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import ContactForm from './ContactForm';

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

  const contacSectionIcons = [
    {
      Icon: FaPhone,
      name: 'phone',
      text: '+48 789397113',
      link: 'tel:+48789397113',
    },
    {
      Icon: MdEmail,
      name: 'email',
      text: 'Reach me by email now!',
      link: 'mailto:nngimenez1985@gmail.com',
    },
    {
      Icon: MdLocationOn,
      name: 'location',
      text: 'Currently in Sopot, PL. Remote working worldwide.',
    },
    { Icon: FaCode, name: 'work', text: 'Available for freelance hire' },
  ];

  const iconColor = '#5158bb';
  const iconSize = '3em';

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
          <div className='contact-sections-group col-md-6 d-flex flex-column flex-md-row flex-wrap align-content-around mb-5'>
            {contacSectionIcons.map(({ Icon, name, text, link }) => (
              <div
                key={name}
                className='section-group col-md-4 align-self-center text-center align-middle d-flex flex-column-reverse p-2'
              >
                <div style={{ padding: '0.25rem' }}>{text}</div>
                <div className='contact-links' style={{ zIndex: '2' }}>
                  <a href={link}>
                    <Icon size={iconSize} color={iconColor} />
                  </a>
                </div>
              </div>
            ))}
          </div>

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
