import React, { useState } from 'react'
function TextHandaling() {
    const [Text, setText] = useState(true)
    let toggle = () => {
        setText(prev => !prev);
    }
    return (
        <div>
            <p>{Text && "My Name Is Habib A Modern Web Developer!!"}</p>
            <button type="button" className="btn btn-primary" onClick={toggle}>{Text?"HideText":"ShowText"}</button>

        </div>

    )
}

export default TextHandaling