import React, { useState } from 'react'
import Left from './Components/Left'
import Right from './Components/Right'

const App = () => {
  const [data, setData] = useState([])
  return (
    <div style={{display:"flex"}}>
      <Left setData={setData} data={data} />
      <Right data =  {data} />
    </div>
  )
}

export default App