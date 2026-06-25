import React from 'react'

// const Card = (props) => {
//   return (
//     <div style={{height:"250px", width:"250px", backgroundColor:"red", border:"1px solid black"}}>
//         <h1>{props.name}</h1>
//         <p>{props.price}</p>
//     </div>
//   )
// }

// const Card = (props) => {
//     const {name,price} = props;
//   return (
//     <div style={{height:"250px", width:"250px", backgroundColor:"red", border:"1px solid black"}}>
//         <h1>{name}</h1>
//         <p>{price}</p>
//     </div>
//   )
// }


const Card = ({name,price}) => {
     
  return (
    <div style={{height:"250px", width:"250px", backgroundColor:"red", border:"1px solid black"}}>
        <h1>{name}</h1>
        <p>{price}</p>
    </div>
  )
}
export default Card