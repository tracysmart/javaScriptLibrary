import React, {useState, useEffect} from 'react';

const Effects = () => {
    const [clicks, setClicks] = useState(0);
    const [color, setColor] = useState('blue')

    useEffect(() => {
      if (clicks % 5=== 0){
        setColor(color === 'blue' ? 'red':'blue');
      }
    }, [clicks])
  
  return(
    <div style={{'color':color}}>
      <button onClick={() => setClicks(clicks + 1)}>{clicks} clicks</button>
      <p>this may work</p>
    </div>
  )
  }

export default Effects;
