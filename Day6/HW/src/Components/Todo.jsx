import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard';
const api = "https://jsonplaceholder.typicode.com/todos/";
const Todo = () => {

  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch(api)
    .then((res)=>{
        return res.json();
    }).then((d)=>{
        setData(d);
    })
  },[])

  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"10px", backgroundColor:"pink", padding:"10px"}}>
        {data.map((item)=>{
            return <TodoCard id={item.id} title={item.title} status={item.completed} />
        })}
    </div>
  )
}

export default Todo