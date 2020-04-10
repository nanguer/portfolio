import React, { useContext } from 'react';
import LandingLoader from '../components/loaders/LandingLoader';
import AboutMeLoader from '../components/loaders/AboutMeLoader';
import PortfolioLoader from '../components/loaders/PortfolioLoader';
import ContactLoader from '../components/loaders/ContactLoader';
import AbsoluteWrapper from '../components/AbsoluteWrapper';
import { CSSTransition } from 'react-transition-group';
import { Route } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Routes = () => {
  const { state } = useContext(AppContext);
  const routes = [
    { path: '/', name: 'Landing', Component: LandingLoader },
    { path: '/about', name: 'About', Component: AboutMeLoader },
    { path: '/portfolio', name: 'Portfolio', Component: PortfolioLoader },
    { path: '/contact', name: 'Contact', Component: ContactLoader },
  ];

  return routes.map(({ path, Component, name }) => (
    <Route key={name} path={path} exact>
      {({ match }) => (
        <AbsoluteWrapper>
          <CSSTransition
            in={match != null}
            timeout={1600}
            classNames='page'
            unmountOnExit
          >
            <div className='page h-100'>
              <Component navState={state} />
            </div>
          </CSSTransition>
        </AbsoluteWrapper>
      )}
    </Route>
  ));
};

export default Routes;
