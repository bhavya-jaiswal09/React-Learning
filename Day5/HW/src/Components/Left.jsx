import React, { useState } from 'react'

const Left = ({setData, data}) => {
    const [titleVal, setTitleVal] = useState("")
    const [descVal, setDescVal] = useState("")
  return (
    <div style={{width:"50vw", height:"100vh", borderRight:"1px solid black"}}>

        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"20px", height:"500px"}}>

             <input type="text" style={{padding:"10px", width:"250px", height:"40px"}}
                
                onInput={(e)=>{
                    setTitleVal(e.target.value);
                }}
                value={titleVal}
             
             />
             <textarea name="" id="" style={{width:"250px", height:"90px"}}
                onInput={(e)=>{
                    setDescVal(e.target.value);
                }}
                value={descVal}
             ></textarea>

             <button style={{width:"250px", padding:"8px", borderRadius:"20px", border:"none", color:"rgb(255,240,228)", backgroundColor:"rgb(0,121,121)"}}
                onClick={()=>{
                     console.log(titleVal,descVal)
                     setData(
                        [...data,
                        {
                            title:titleVal,
                            description:descVal
                        }]
                     )

                     setTitleVal("");
                     setDescVal("");
                    
                }}
             >ADD</button>

        </div>
        
    </div>
  )
}

export default Left