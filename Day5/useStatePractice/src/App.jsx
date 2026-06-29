// import React from 'react'
// import Form from './Components/Form'
// import Left from './Components/Left'
// import Right from './Components/Right'
// import { useState } from 'react'

// const App = () => {
//   const[text, setText] = useState("")
//   return (
//     <div>
      
//       <div >
//         <Left setText={setText}/>
//         <Right text={text} />
//       </div>
       
//     </div>
//   )
// }

// export default App




import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import { useState } from 'react'

const App = () => {
  const [darkMode, setdarkMode] = useState(false)
  return (
    <div>
      <Navbar setdarkMode={setdarkMode} />
      <Hero darkMode={darkMode} />
    </div>
  )
}

export default App