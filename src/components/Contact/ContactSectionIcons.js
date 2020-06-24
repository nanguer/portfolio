import React from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import {FaPhone, FaCode} from 'react-icons/fa';

const ContactSectionIcons = () => {

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
    )
}

export default ContactSectionIcons
