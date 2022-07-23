import React from 'react';
import Photo from './components/photo';
import Name from './components/Name';
import Adress from './components/Adress';
import './App.css';

function App() {
  return (
    <div className="App">
     <Photo></Photo>
      <Name></Name>
      <Adress></Adress> 
    </div>
  );
}

export default App;
