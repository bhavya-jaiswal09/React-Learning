import React from 'react'

const TodoCard = ({id,title,status}) => {
  return (
    <div style={{border:"1px solid red", width:"300px", backgroundColor:"white", borderRadius:"10px", padding:"20px"}}>
        <h3>Title: {title}</h3>
        <p>Id: {id}</p>
        {status ? <h5>Status: <span style={{color:"green"}}>Task completed</span></h5> : <h5>Status: <span style={{color:"red"}}>Task Not completed</span></h5>}
    </div>
  )
}

export default TodoCard