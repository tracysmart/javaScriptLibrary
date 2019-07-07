
import React from 'react';
import './App.css';
import ImageChild from'./components/ImageChild'

function App() {
  const testVar = <p>This is nuts!></p>
  return (
    <div id="styleTest">
      {/* <div id="navMain">
        <ul className="list">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul> */}
    {/* </div> */}
{/* <TestChild />;

<FormChild />; */}

function arrayPlay(){
  return [0,1,2,3,4].map(val => <p>{val}</p>) //input array: [0,1,2,3,4] output array: 
  }

  function arrayPlay2(){
    return ['red', 'blue', 'green'].map(val2) => <span>{val2}</span>
  }



</div>
  );
}

export default App;
