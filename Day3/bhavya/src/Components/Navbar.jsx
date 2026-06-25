import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", border:"1px solid black", backgroundColor:"pink"}}>
        <h2 style={{color:"red"}}>Navbar</h2>
        <div style={{display:"flex", gap:"10px", marginRight:"15px"}}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        </div>
        
    </div>
  )
}

export default Navbar