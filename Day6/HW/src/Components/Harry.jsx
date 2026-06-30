import React, { useEffect, useState } from 'react'
import HarryCard from './HarryCard';
const api = "https://hp-api.onrender.com/api/characters";

const Harry = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(api)
        .then((res)=>{
            return res.json();
        }).then((d)=>{
            setData(d)
        })
    },[])
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"10px", backgroundColor:"rgb(81, 207, 87)"}}>
        {data.map((item)=>{
            return <HarryCard name={item.name} imageSrc={item.image} dob={item.dateOfBirth} />
        })}
    </div>
    
  )
}

export default Harry