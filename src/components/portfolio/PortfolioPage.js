import React, { useState, useEffect, useContext } from 'react';
import ItemLoader from '../loaders/ItemLoader';
import data from '../../data/data.json';

import { AppContext } from '../../context/AppContext';

const PortfolioPage = () => {
  const [works, setWorks] = useState([]);
  const { setCurrentOption } = useContext(AppContext);

  useEffect(() => {
    return () => {
      setCurrentOption('');
    };
  }, [setCurrentOption]);

  useEffect(() => {
    setWorks((works) => works.concat(data));
  }, []);

  return (
    <div className='portfolio-list d-flex flex-wrap justify-content-around align-items-start'>
      {works.map((work) => (
        <ItemLoader key={work.id} work={work} />
      ))}
    </div>
  );
};

export default PortfolioPage;
