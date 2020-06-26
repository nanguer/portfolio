import React, { useContext, useEffect } from 'react';
import Studies from './studies';
import Languages from './languages';
import TechIcons from './techIcons';
import Interests from './interests';
import {
  FaAngleDown,
  FaAngleUp,
} from 'react-icons/fa';
import { animateScroll } from '../Animations';

import { AppContext } from '../../context/AppContext';


const AboutMePage = ({ navState }) => {
  const { setCurrentOption } = useContext(AppContext);

  const {isDesktop} = navState;

  useEffect(() => {
    return () => {
      setCurrentOption('');
    };
  }, [setCurrentOption]); 

  const handleScroll = (anchor) => {
    animateScroll(anchor);
  };


  const resumeLink =
    'https://drive.google.com/open?id=14uZyfXsZoa08DGk12Utvag9cQJOD0nc4';


  return (
    <div
      className='main-about container
	d-flex flex-column pt-md-5'
    >
      <div
        className='container d-flex flex-column justify-content-between about-me-up pb-5'
        style={{ height: '50%', zIndex: '2' }}
      >
        <div className='aboutMe pt-5 pt-md-1'>
          <div>
            <h2>
              Keeping it <span className='dot'>simple</span>{' '}
            </h2>
          </div>
          <div className='paragraphs pt-md-5 pt-2'>
            <p>
              I'm a worldwide Web Developer and IT and Telecommunications
              Technician, with strong interest for web development and
              networking, with special care in simplicity and efficiency.
            </p>
            <p>
              I've been in the IT Service industry for more than 6 years, in
              different countries and cultures, where I learned to participate
              and deliver in projects following the ITIL framework for quality
              management.
            </p>
            <p>
              Nowadays I spend most of my time developing in the most modern
              stack web technologies and frameworks, aiming to participate in
              creative projects that can affect people in positive ways.
            </p>
          </div>
          <div className="about-photo"></div>
        </div>
        <div className='about-footer d-flex flex-row justify-content-between'>
          <div className='tech-stack mb-3'>
            <div className='mb-4'>Favourite technology stack</div>
            <TechIcons  isDesktop={isDesktop} />
          </div>
          <div
            className='arrow-container-about d-inline-md-flex '
            onClick={() => handleScroll('#about-down')}
          >
            <FaAngleDown size='2em' />
          </div>
        </div>
      </div>

      <div
        className='container about-down d-flex flex-column justify-content-center'
        id='about-down'
        style={{ height: '50%', marginBottom: '4rem' }}
      >
        <div
          className='arrow-up justify-content-end d-inline-md-flex '
          onClick={() => handleScroll('#top')}
        >
          <FaAngleUp size='2em' />
        </div>
        <div className='d-flex flex-column flex-md-row'>
          <div className='studies d-flex flex-column' style={{ zIndex: '2' }}>
            <Studies />
            <Languages />
            <div className='Resume d-flex justify-content-center'>
              <a
                className='my-link pb-5 pb-md-1 pt-5 pt-md-1'
                target='_blank'
                rel='noopener noreferrer'
                href={resumeLink}
              >
                Download a PDF version of my Resume
              </a>
            </div>
          </div>

         <Interests isDesktop={isDesktop} />
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;