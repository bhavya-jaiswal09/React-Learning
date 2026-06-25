import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import MainContent from './Components/MainContent'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div style={{display:"flex", marginTop:"5px"}}>
          <Sidebar/>
         <MainContent/>
      </div>
      
    </div>
  )
}

export default App