import React, { useState } from 'react'
function Stdlist() {
    const [defaulttxt, setdefaulttxt] = useState('Empty')
    const [value, setvalue] = useState('');
    const [Alert, setAlert] = useState('');
    const [stdlist, setstdlist] = useState([])
    const chnge = (e) => {
        setvalue(e.target.value);
        setAlert('')
        setdefaulttxt('Empty');
    }
    const add = () => {
        if (value !== '') {
            setstdlist([...stdlist, value])
            setvalue('');
            setdefaulttxt('');
        }
        else {
            setAlert('Input Cannot Be Empty');
            setdefaulttxt('');
        }
    }
    const clear = () => {
        setstdlist([])
        setAlert('')
        setdefaulttxt('Empty');
    }
    return (
        <>
            <div className="container">
                <h3 style={{ textAlign: 'center' }}>Student List</h3>
                <input onChange={chnge} value={value} type="text" style={{ height: '40px', width: '400px' }} /> <br />
                <button className='btn btn-success my-2 ' onClick={add}>Add To List</button>
                <button className='btn btn-success my-2 mx-2' onClick={clear}>clear List</button>
                <br />
                <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>List:</p>
                <div className="li">
                    {defaulttxt}
                    <p style={{ color: 'red', fontSize: '1.1rem' }}>{Alert}</p>
                    <ol>
                        {
                            stdlist.map((value) => {
                                return <li>{value}</li>
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Stdlist