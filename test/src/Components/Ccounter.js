import React, { useState } from 'react'

function Ccounter() {
    const [Number, setNumber] = useState(0);
    const [Alert, setAlert] = useState('');
    const [btn, setbtn] = useState(false);
    const [inptValue, setinptValue] = useState('')
    const chnge = (e) => {
        setNumber(e.target.value.length);
        setinptValue(e.target.value)
        if (e.target.value.length > 20) {
            setAlert('Word Limit exceeded!!');
            setbtn(true);
        }
        else {
            setAlert('');
            setbtn(false);
        }
    }
    const clear = () => {
        setinptValue(0);
        setbtn(false);
        setAlert('')
        setNumber(1)
    };

    return (
        <div>
            <input value={inptValue} disabled={btn} onChange={chnge} type="text" style={{ height: '100px', width: '200px', margin: '30px' }} />
            <button disabled={btn} className='btn btn-primary'>Submit</button>
            <p>characters: {Number}/20</p> <p style={{ color: 'red' }}>{Alert}</p>
            <button onClick={clear} className='btn btn-primary'>Clear!</button>
        </div>
    );
};

export default Ccounter