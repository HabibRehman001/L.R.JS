import React,{useState} from 'react'
function Btnhandle() {
    const [sign, setsign] = useState(true)
    let chnge = (e) => {
        if (e.target.value != '' ) {
            setsign(false)
        }
        else{
            setsign(true)
        }
    }
    return (
    <div>
        <input onChange={chnge} type="text" style={{height:'60px',width:'150px'}} />
        <button disabled = {sign} className='btn btn-success my-4'>ClickMe!</button>
    </div>
  )
}

export default Btnhandle