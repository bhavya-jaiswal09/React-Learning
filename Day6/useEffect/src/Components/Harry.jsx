import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
const api = 'https://hp-api.onrender.com/api/characters'

const Harry = () => {
    const [data, setData] = useState([])
    console.log(data);

    useEffect(()=>{
        fetch(api)
        .then((res) =>{
            return res.json();
        }).then((d)=>{
            setData(d);
        })
    },[])

  return (
    <>
        <h1>Harry Potter Character Name</h1>

        {data.map((item)=>{
            return <h1>{item.name}</h1>
        })}
    </>
  )
}

export default Harry