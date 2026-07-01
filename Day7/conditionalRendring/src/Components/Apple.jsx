import React, { useEffect, useState } from 'react'

const Apple = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{ 
         //console.log("apple component mounted")

         const id = setInterval(()=>{
            console.log("AD");
         },1000)

        return (()=>{
            //console.log("apple component umounted")
            clearInterval(id)
        })
    },[])

  return (
    <div>Apple
        <button onClick={()=>{
            setCount(count+1)
        }}>increment</button>
        <h1>{count}</h1>
    </div>
    
  )
}

export default Apple