import React from 'react';

import Props from './components/Props/Props';
import './App.css';
import State from './components/State/State';




function App() {
  return (
    <div className="App">
      <h1>Props, Events, State</h1>
      <img alt='props, events, states' src='https://images.unsplash.com/photo-1558452451-b4de9dd5b540?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=8'/>
      <p>Props, Events, & States are things in React</p>
    <div>
      <Props/>
      <EventHandlers/>
      <State />
   
      
    </div>;
  );
}
export default App;