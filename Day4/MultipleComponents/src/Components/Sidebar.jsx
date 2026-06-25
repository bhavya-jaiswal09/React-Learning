import React, { useState } from 'react'

const Sidebar = () => {
    const [inSidebar,SetinSidebar] = useState(false)
  return (
    <aside
        style={{height:"95vh", width: (inSidebar ? "30vw":"5vw") , backgroundColor:"aqua"}}
        onMouseEnter={()=>{
            SetinSidebar(true);
        }}
        onMouseLeave={()=>{
            SetinSidebar(false)
        }}
    >

    </aside>
  )
}

export default Sidebar