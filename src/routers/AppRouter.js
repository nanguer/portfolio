import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Routes from './Routes';
import Stripes from '../components/Stripes';
import ParticlesBg from 'particles-bg';
import particlesConfig from './particlesConfig';
import '../styles/styles.scss';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Stripes />
      <ParticlesBg
        type='custom'
        config={particlesConfig}
        style={{ position: 'fixed' }}
      />
      <Routes />
    </Router>
  );
};

export default AppRouter;
