import React from 'react'
import Card from './Card'

const MainContent = () => {
  return (
    <div style={{width:"80vw",display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"100px", border:"2px solid blue"}}>
        <Card price={100} name="laptop"/>
        <Card price={100} name="laptop"/>
        <Card price={100} name="laptop"/>
        <Card price={100} name="laptop"/>
        <Card price={100} name="laptop"/>
        <Card price={100} name="laptop"/>
    </div>
  )
}

export default MainContent