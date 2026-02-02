import React, { useState } from 'react';

function Timer(props) {
  const [showInput, setShowInput] = useState(true);
  const [value, setValue] = useState('');
  const [showTimer, setShowTimer] = useState(false);
  const [showTimesUp, setShowTimesUp] = useState(false);

  const startTimer = () => {
    if (value && Number(value) > 0) {
      setShowInput(false);
      setShowTimer(true);
      let id = setInterval(() => {
        setValue(prev => {
          if (prev <= 1) {
            clearInterval(id);       
            setShowTimer(false);        
            setShowTimesUp(true);       
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const handleChange = (e) => {
    setValue(Number(e.target.value)); // ensure number
  };

  const resetTimer = () => {
    setValue('');
    setShowInput(true);
    setShowTimer(false);
    setShowTimesUp(false);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '40px' ,color : props.mode == 'light' ? 'black':'white'}}>Online Countdown Timer</h2>

      {showInput && (
        <div style={{ textAlign: 'center'}}>
          <input
            type="number"
            value={value}
            onChange={handleChange}
            style={{ height: '50px', width: '150px', borderRadius: '8px',border:props.mode == 'dark'?'3px solid black':"1px solid black", backgroundColor : props.mode == 'dark' ? 'grey':'white' }}
          />
          <br />
          <button onClick={startTimer} className='btn btn-success mx-3 my-3' style={{ width: '150px' }}>
            Start
          </button>
        </div>
      )}

      {showTimer && (
        <p style={{ fontSize: '2rem', margin: '40px', fontWeight: 'bold', textAlign: 'center' }}>
          {value}
        </p>
      )}

      {showTimesUp && (
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '2rem', margin: '40px', fontWeight: 'bold' }}>TimesUp!!</p>
          <button className='btn btn-success' onClick={resetTimer}>New Timer</button>
        </div>
      )}
    </div>
  );
}

export default Timer;
