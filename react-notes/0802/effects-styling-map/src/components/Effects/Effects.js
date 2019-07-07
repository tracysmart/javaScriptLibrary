import React, {useEffect, useState} from 'react';
import EffectsChallenge from './Effects/EffectsChallenge';

const Effects = () => {
  const [clicks, setClicks] = useState(0);
  
  useEffect(() => {
    let interval = setInterval(() => console.log(Date.now()), 2000)

    return () => clearInterval(interval);
  })

  return(
    <div>
      <p>{clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>Click Me!</button>
    </div>
  )
}

export default Effects;



