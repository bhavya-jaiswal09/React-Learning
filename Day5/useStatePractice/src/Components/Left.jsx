// import React from 'react'
// import { useState } from 'react'
// import Right from './Right'

// const Left = () => {
//     const [val, setVal] = useState("")
//   return (
//     <div style={{display:"flex", justifyContent:"space-between"}}>
//         <input type="text" onInput={(e)=>{
//             setVal(e.target.value)
//         }} />

//         <Right ip={val}/>
         
//     </div>
//   )
// }

// export default Left



import React from 'react'

const Left = ({setText}) => {
  return (
    <div style={{width:"50vw"}}>
        <input
            onInput={(e)=>{
                setText(e.target.value)
            }}
        type="text" />
    </div>
  )
}

export default Left