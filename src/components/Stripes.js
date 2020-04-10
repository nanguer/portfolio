import React, { useRef, useEffect, useContext } from 'react';
import { setTimeLine } from '../components/Animations';
import { AppContext } from '../context/AppContext';

const Stripes = () => {
  const { currentOption } = useContext(AppContext);
  let stripes = useRef(null);

  useEffect(() => {
    setTimeLine(currentOption, stripes);
  }, [currentOption]);

  return <div className='stripes' ref={(el) => (stripes = el)} />;
};

export default Stripes;
