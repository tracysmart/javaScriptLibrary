import React, {useState, useEffect} from 'react';

const getTimeString = () => {
  const date = new Date(Date.now()).toLocaleTimeString();
  return date;
}

const ClockApp = () => {
  const [time, setTime] = useState(getTimeString());
  
  useEffect(() => {
    const interval = setInterval(() => {
    var date = getTimeString();
    setTime(date);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="section-title">React Clock</h1>
      <p>Indianapolis, Indiana</p>
      <hr className="explanation" />
      <p>{time}</p>
    </div>
  );
}


export default ClockApp;