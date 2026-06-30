import React from 'react'

const HarryCard = ({name,imageSrc,dob}) => {
  return (
    <div style={{ width:"350px", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h2>{name}</h2>
        <img src={imageSrc ? imageSrc : "https://media.licdn.com/dms/image/v2/C5603AQG1LWRMggOT5w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1657599235105?e=2147483647&v=beta&t=fgtd6tzkFSqaBGweYLom2XjwERgn-uGmvBnBXOKE8gs" }alt=""  style={{width:"300px", height:"300px"}}/>
        <p>{dob}</p>

    </div>
  )
}

export default HarryCard