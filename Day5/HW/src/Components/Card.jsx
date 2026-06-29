import React from 'react'

const Card = ({title,description}) => {
  return (
    
        <div style={{border:"none",borderRadius:"15px", height:"180px", width:"200px", backgroundColor:"rgb(36,177,177)"}}>
            <div style={{margin:"5px", display:"flex", flexDirection:"column", alignItems:"center"}}>  
                <h3 style={{color:"red"}}>{title}</h3>
                <p style={{color:"gray"}}>{description}</p>
            </div>
        </div>
     
  )
}

export default Card