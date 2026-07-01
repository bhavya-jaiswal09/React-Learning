// // import React, { useState } from 'react'

// // const App = () => {
// //   const [showMain, setShowMain] = useState(true)
// //   const [showBg, setShowBg] = useState(false)
// //   return (
// //     <div>
// //       <button className='border' 
// //         onClick={()=>{
// //           setShowMain(!showMain)
// //         }}
// //       >show/hide</button>

// //       {showMain && <main>Hello guys</main>}
// //       {showMain ? <h2>Hello 2</h2> : null}

// //       <button className='border'
// //         onClick={()=>{
// //           setShowBg(!showBg)
// //         }}
// //       >Show/Hide BG</button>
// //       {/* <h1 style={{backgroundColor:(showBg ? "red" : "white")}}>Apple</h1> */}
// //       {/* <h1 className={showBg ? "bg-red-600": "bg-white"}>Apple</h1> */}
// //       <h1 className={"border " + (showBg ? "bg-red-600" : "bg-white")}>Apple</h1>
// //     </div>
// //   )
// // }

// // export default App


import React, { useState } from 'react'
import Apple from './Components/Apple'

const App = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={()=>{
        setShow(!show)
      }}>Toggle</button>

      {show && <Apple />}
    </div>
  )
}
export default App

 