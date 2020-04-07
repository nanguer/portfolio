import React from 'react';
import LinkIcons from './LinkIcons';
import { FaHeart } from 'react-icons/fa';
import Flip from 'react-reveal/Flip';

const PortfolioItem = ({ work }) => {
  const { title, img, description, link, github, id } = work;

  const isThisweb = id === 8;

  const linkSection = (
    <div
      style={{ zIndex: '2' }}
      className='project-links d-flex flex-row justify-content-center'
    >
      {!isThisweb ? <LinkIcons link={link} github={github} /> : null}
    </div>
  );

  const imageSection = (
    <img
      className='img-thumbnail shadow-mine'
      src={img}
      alt=''
      style={{ padding: '4vh 0' }}
    />
  );

  const Header = (headerTitle) => (
    <h2 style={{ color: '#fff' }}>{headerTitle}</h2>
  );

  const withLink = (component, link) => (
    <a
      className='withLink'
      target='_blank'
      rel='noopener noreferrer'
      href={link}
    >
      {component}
    </a>
  );

  return (
    <Flip top>
      <div
        className='portfolio-item d-flex align-items-center text-center flex-column col-6 col-lg-4'
        style={{ padding: '5vh 1vh', zIndex: '2' }}
      >
        {isThisweb ? withLink(Header(title), github) : Header(title)}
        {id !== 8 ? imageSection : null}
        <p style={{ paddingTop: '10px' }}>
          {description}
          {isThisweb && <FaHeart size='0.8em' color='#e60000' />}
        </p>
        {!isThisweb ? linkSection : null}
      </div>
    </Flip>
  );
};

export default PortfolioItem;
