import React from 'react';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import '../src/App.css';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Players></Players>
    </div>
  );
};

export default App;