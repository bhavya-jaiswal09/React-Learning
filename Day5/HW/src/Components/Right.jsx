import React from 'react'
import Card from './Card'

const Right = ({data}) => {
  return (
    <div style={{width:"50vw", display: "flex", flexWrap: "wrap" ,gap: "20px", padding: "20px", alignContent: "flex-start"}}>
        
        {data.map((item)=>{
          
          return <Card title={item.title} description={item.description} />

        })}
    </div>
  )
}

export default Right