import React from 'react';

import {
    GiFullMotorcycleHelmet,
    GiBookCover,
    GiMusicalNotes,
  } from 'react-icons/gi';

const Interests = ({isDesktop}) => {
   
  
    const interestsArray = [
        { id: 1, Icon: GiFullMotorcycleHelmet, text: 'Motorcycles' },
        { id: 2, Icon: GiMusicalNotes, text: 'Music and Audio Production' },
        { id: 3, Icon: GiBookCover, text: 'Books and literature' },
      ];
    
      const interestNodes = interestsArray.map(({ id, Icon, text }) => {
        return (
          <div
            key={id}
            className='interest-icon d-flex flex-column justify-content-center pt-3 pb-3 pb-xl-4 pl-xl-3 pr-xl-3'
          >
            <div
              className='text-center text-md-start'
              style={{ padding: '0 2rem' }}
            >
              <Icon size={isDesktop ? '3em' : '2em'} color='#fff' />
            </div>
            <p className='text-center text-md-start'>{text}</p>
          </div>
        );
      });
    return (
        <div className='interests pl-md-5 pt-4 d-flex flex-column'>
            <h4
              className='text-center text-md-start pb-3'
              style={{ fontWeight: '700' }}
            >
              Other interests...
            </h4>
            <div className='d-flex flex-column flex-xl-row'>{interestNodes}</div>
          </div>
    )
}

export default Interests
