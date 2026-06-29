import React from 'react'
import { use } from 'react';
import { useState } from 'react'

const Form = () => {
    // const[user, setUser] = useState("");
    // const[pw, setPw] = useState("");
    // const[email, setEmail] = useState("");

    const[data, setData] = useState({
        username: "",
        password: "",
        email: ""
    })

  return (
    <div>
        <input type="text"
             onInput={(e)=>{
                //setUser(e.target.value)
                setData({
                    ...data,
                    username: e.target.value
                })
            }}
         />

        <input type="password"
            onInput={(e)=>{
                // setPw(e.target.value)
                setData({
                    ...data,
                    password: e.target.value
                })
            }} 
        />
        <input type="email"
             onInput={(e)=>{
                // setEmail(e.target.value)
                setData({
                    ...data,
                    email: e.target.value
                })
            }} 
        />

        <button onClick={()=>{
            console.log("btn clicked")
            // console.log(user)
            // console.log(pw)
            // console.log(email)


            console.log(data)
        }}>Submit</button>
    </div>
  )
}

export default Form