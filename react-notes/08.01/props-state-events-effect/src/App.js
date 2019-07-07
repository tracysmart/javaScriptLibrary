import React from 'react';
import Props from'./components/Props/Props';
import './App.css';
import EventHandlers from './components/EventHandlers/EventHandlers';
import State from './components/State/State';
import Effects from './components/Effects/Effects';


function App() {
  return (
    <div>
    <Props str={'string'} num={7} arr={['brie', 'tracy', 'austin', 'chase']}/>  
    <EventHandlers />
    <State />
    <Effects />
    </div>
  );
}

export default App;
