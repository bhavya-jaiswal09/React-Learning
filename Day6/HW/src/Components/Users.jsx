import React, { useState, useEffect } from 'react'
import UserCard from './UserCard';
const api = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch(api)
        .then((res)=>{
            return res.json();
        })
        .then((d)=>{
            console.log(d)
            setData(d)
        })
    },[])

    //console.log(setData)
  return (
    <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    backgroundColor: "#f4f7fb",
    padding: "30px",
  }}>
        {data.map((item)=>{
            return <UserCard item={item}  />
        })}
    </div>
  )
}

export default Users