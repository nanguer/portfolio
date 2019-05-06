import React from 'react';
import Greet from './components/Greet';
import Submenu from './components/Submenu';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <div className="stripes" />
      <Greet />
      <Submenu />
    </div>
  );
}

export default App;
