import React, { useState } from 'react'
function Colorchnge() {
    const [color, setcolor] = useState('white')
    let fillRed = () => {
        setcolor('red')
    }
    let fillGreen = () => {
        setcolor('green')
    }
    let remove = () => {
        setcolor('white')
    }
    return (
        <div style={{display:'flex',gap:'40px', margin: '30px  30px' }}>
            <div className="boxes" style={{
                height:"100px",
                width:"300px",
                backgroundColor:color
            }}></div>
            <div style={{
                height:"100px",
                width:"300px",
                backgroundColor:color
            }}
            className="boxes"></div>
            <div>
                <button className='btn btn-danger mx-4 my-4' onClick={fillRed}>Fill With Red</button>
                <button className='btn btn-success my-4 mx-4' onClick={fillGreen}>Fill With Green</button>
                <button className='btn btn-warning mx-4 my-4' onClick={remove}>Remove color</button>
            </div>
        </div>
    )
}

export default Colorchnge