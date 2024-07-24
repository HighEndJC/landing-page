import React from 'react';
import "./index.css"; 
import Header from './components/Header.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import MissionStatement from './components/MissionStatement.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <MissionStatement />
    </div>
   
  );
}

export default App;