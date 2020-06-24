import React from 'react'

const Studies = () => {

    const studiesArray = [
        {
          name: 'Higher Technician in Telecommunications and Computer Systems', school: '/Santapau-Pifma, Barcelona',
          link:
            'https://drive.google.com/open?id=1VXaBlpR0BM1AJtzNbigJCJZms-v7Ymqy',
        },
        { name: 'Modern Web Fullstack Certificate',school:'/Wipro' },
        { name: 'Audio Engineering Diploma', school:'/SAE Institute' },
        {name: 'Language of Design: Form and Meaning',school:'/California Institute of The Arts'},
        { name: 'Cisco CCNA Program' },
      ];

      const studiesNodes = studiesArray.map(({ name, link, school }) => {
        return link ? (
     
             <a
            key={name}
            className='my-link'
            style={{ zIndex: '5' }}
            target='_blank'
            rel='noopener noreferrer'
            href={link}
          >
            <li style={{ padding: '0.5rem 0' }}>{name}<span className="school">{' '}
          {school}
          </span></li>
          </a>         
        ) : (
         
          <li key={name} style={{ color: '#fff', padding: '0.5rem 0' }}>
            {name}<span className="school">{' '}
          {school}
          </span>
          </li>
        );
      });
    return (
      <div className='study-list pt-4'>
              <h4 className='text-center text-md-start pb-3 studies-title'>
                Studies {'&'} more
              </h4>

              <ul className='text-center text-md-start'>{studiesNodes}</ul>
            </div>
    )
}

export default Studies

  