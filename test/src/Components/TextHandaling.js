import React, { useState } from 'react'
function TextHandaling() {
    const [Text, setText] = useState(true)
    const [userText, setuserText] = useState('')
    const [inputVal, setInputVal] = useState('');
    let toggle = () => {
        setText(prev => !prev);
    }
    let inptChange = (e) => {
        setInputVal(e.target.value)
    }
    let output = () => {
        setuserText(inputVal)

    }
    return (
        <div>
            {/* <p>{Text && "My Name Is Habib A Modern Web Developer!!"}</p>
            <button type="button" className="btn btn-primary" onClick={toggle}>{Text?"HideText":"ShowText"}</button>
 */}

            <div className="container">
                <input type="text" onChange={inptChange} style={{ height: '50px', width: '130px' }} />
                <br />
                <button onClick={output} className='btn btn-success my-4'>submit</button>
                <h4>Your text</h4>
                <p>{userText}</p>
            </div>
        </div>

    )
}

export default TextHandaling