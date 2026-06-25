import React from 'react'

const Footer = () => {
  return (
    <div style={{border:"1px solid black", backgroundColor:"gray", height:"60px", display:"flex", justifyContent:"center", alignItems:"center", gap:"20px"}}>
        <a href="" style={{textDecoration:"none", color:"black"}}>Home</a>
        <a href="" style={{textDecoration:"none", color:"black"}}>User</a>
        <a href="" style={{textDecoration:"none", color:"black"}}>Product</a>
        <a href="" style={{textDecoration:"none", color:"black"}}>Gallery</a>
    </div>
  )
}

export default Footer