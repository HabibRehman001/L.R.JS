import React, { useState } from 'react'
function Counter() {
  const [value, setvalue] = useState(0)
  let increase = () => {
    setvalue(value+1);
  }
  let reset = () => {
    setvalue(0)
  }
  return (
    <>
      <h2 style={
        {
          textAlign: 'center',
          fontSize: '3rem'
        }}> Counter
      </h2>
      <p style={{textAlign: 'center',fontSize:'3rem'}} >{value}</p>
      <div className="btn " style={{
        display: 'flex',
        width: '100vw',
        justifyContent : 'center',
        gap: '30px',
        border: '1px solid white'
      }}>
        <button type="button" style={{width:'150px'}} className="btn btn-success" onClick={increase}>Increase</button>
        <button type="button" className="btn btn-danger" style={{width:'150px'}} onClick={reset}>Reset</button>

      </div>

    </>
  )
}

export default Counter