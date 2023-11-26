import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Format the time to display
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <h1 className='text-2xl'>Current Time</h1>
      <p>{formattedTime}</p>
    </div>
  );
};

export default Clock;