import React from 'react'

const Navbar = ({setdarkMode}) => {
  return (
    <div>
        <nav style={{height:"5vh", backgroundColor:"aqua"}}>

            <button onClick={(e)=>{
                setdarkMode(false)
            }}>Light</button>

            <button onClick={()=>{
                setdarkMode(true)
            }}>Dark</button>
            
        </nav>
    </div>
  )
}

export default Navbar