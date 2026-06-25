import React, { useState } from 'react'

const Text = () => {

    const [str, setStr] = useState("")
  return (
    <div>
        <input 
          onInput={(e)=>{
             setStr(e.target.value)
          }}
          type="text" />
        <h1>{str}</h1>
    </div>
  )
}

export default Text