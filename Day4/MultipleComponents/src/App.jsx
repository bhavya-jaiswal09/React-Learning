// import React from 'react'
// import Card from './Components/Card';

// const App = () => {
//   const users = [
//   {
//     name: "Virat Kohli",
//     imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
//   },
//   {
//     name: "Rohit Sharma",
//     imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
//   },
//   {
//     name: "MS Dhoni",
//     imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3"
//   },
//   {
//     name: "Sachin Tendulkar",
//     imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
//   },
//   {
//     name: "Hardik Pandya",
//     imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
//   }
// ];

 
//   return (
//     <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
//       {
//         users.map((item)=>{
//           return <Card name={item.name} imgSrc={item.imageUrl} />
//         })
//       }
//     </div>
//   )
// }

// export default App




// import React from 'react'

// const App = () => {

//   const btnClickedHandler = ()=>{
//     console.log("btn is clicked");
//   }

//   return (
//     <div>
//       <button onClick={btnClickedHandler}>Click me</button>
//     </div>
//   )
// }

// export default App





import React, { useState } from 'react'
import Counter from './Components/Counter'
import Text from './Components/Text'
import Sidebar from './Components/Sidebar'

const App = () => {

  const [darkMode, setdarkMode] = useState(false)
  return (
    
    <div style={{ backgroundColor:(darkMode?"gray":"white")}}>


      <nav>
        <button onClick={()=>{
          setdarkMode(false)
        }}> Light</button>

        <button onClick={()=>{
          setdarkMode(true)
        }}>Dark</button>
      </nav>
        <div style={{display:"flex"}}>
            <Sidebar />
          <div>
            
            <Counter/>
            <hr />
            <Text />
          </div>
        </div>
      

    </div>
  )
}

export default App