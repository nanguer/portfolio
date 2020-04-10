import React, { useState, useRef } from 'react';
import LandingLoader from '../components/loaders/LandingLoader';
import AboutMeLoader from '../components/loaders/AboutMeLoader';
import PortfolioLoader from '../components/loaders/PortfolioLoader';
import ContactLoader from '../components/loaders/ContactLoader';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
//import NavbarMenu from "../components/NavbarMenu";
import Navbar from '../components/Navbar';
import AbsoluteWrapper from '../components/AbsoluteWrapper';
import { setTimeLine } from '../components/Animations';
import { Parallax, Background } from 'react-parallax';
import ParticlesBg from 'particles-bg';

import '../styles/styles.scss';

const routes = [
  { path: '/', name: 'Landing', Component: LandingLoader },
  { path: '/about', name: 'About', Component: AboutMeLoader },
  { path: '/portfolio', name: 'Portfolio', Component: PortfolioLoader },
  { path: '/contact', name: 'Contact', Component: ContactLoader },
];

const AppRouter = () => {
  const [state, setState] = useState({
    initial: false,
    Landing: true,
    About: false,
    Portfolio: false,
    Contact: false,
    isDesktop: window.innerWidth > 768,
  });
  let stripes = useRef(null);

  let configParticles = {
    num: [2, 18],
    rps: 0.5,
    radius: [0.5, 1.5],
    life: [1.5, 3],
    v: [0.01, 0.6],
    tha: [-2, 40],
    // body: "./img/icon.png", // Whether to render pictures
    rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [0.1, 0.6],
    position: 'all', // all or center or {x:1,y:1,width:100,height:100}
    color: ['#e5ddeb', '#e01930', '#c25993'],
    cross: 'dead', // cross or bround
    random: 15, // or null,
    g: 0.01, // gravity
    //f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(
        particle.p.x,
        particle.p.y,
        particle.radius * 2,
        particle.radius * 2
      );
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    },
  };

  const handleSetNav = (option) => {
    if (state[option]) {
      return null;
    } else {
      setState({
        ...state,
        Landing: false,
        About: false,
        Portfolio: false,
        Contact: false,
        [option]: true,
      });

      setTimeLine(option, stripes);
    }
  };

  return (
    <Router>
      <Navbar handleSetNav={handleSetNav} navState={state} />
      <div className='stripes' ref={(el) => (stripes = el)} />

      <ParticlesBg
        type='custom'
        config={configParticles}
        style={{ position: 'fixed' }}
      />

      {routes.map(({ path, Component, name }) => (
        <Route key={name} path={path} exact>
          {({ match, history, ...props }) => (
            <AbsoluteWrapper>
              <CSSTransition
                in={match != null}
                timeout={1600}
                classNames='page'
                unmountOnExit
              >
                <div className='page h-100'>
                  <Component navState={state} handleSetNav={handleSetNav} />
                </div>
              </CSSTransition>
            </AbsoluteWrapper>
          )}
        </Route>
      ))}
    </Router>
  );
};

export default AppRouter;
