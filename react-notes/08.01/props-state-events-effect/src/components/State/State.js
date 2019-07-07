import React, {useState} from 'react';
import {StateChild, BerryComponent} from './StateChild'; 

const State = () => {
  const [text, setText] = useState('');

  return(
    <div>
        <input onChange ={(e) => {
          setText (e.target.value);
          console.log('setText fired');
          }} 
          value={text} placeholder='parent input' />
          <StateChild stateVar={text}
          setParentText={setText}/>
          <BerryComponent/>
    </div>
  )
}
  
  export default State;