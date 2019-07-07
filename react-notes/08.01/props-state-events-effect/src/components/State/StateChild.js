import React, {useState} from 'react';

export const StateChild = (props) => {
  const [num, setNum] = useState(0.5);
  return(
    <div>
      <button onClick={() => setNum(Math.random())}>Change{num} to rand num</button>
      <p>This is our StateChild</p>
      <p>{num}</p>
      <p>{props.stateVar}</p>
      <input placeholder='child input' value={props.stateVar} onChange={(e) => props.setParentText(e.target.value)}/>
      
    </div>
  )
}

export const BerryComponent = () => {
  return(
    <div>
      <p>This is our BerryComponent</p>
    </div>
  )
}