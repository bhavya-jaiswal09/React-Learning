import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
const api = 'https://dummyjson.com/products';

const Dummy = () => {
    const [productData, setProductData] = useState([]);

    useEffect(()=>{
         fetch(api)
        .then((res) =>{
            return res.json();
        }).then((d)=>{
            console.log(d)
            setProductData(d.products);
        })
    },[])

  return (
    <div>
        {/* <h1>hii</h1>
        {productData.map((item)=>{
            return <h1>{item.title}</h1>
        })} */}

        {
            productData.length > 0 ? (productData.map((item)=>{
            return <h1>{item.title}</h1>
        })): <h1>Loading...</h1>
        }
    </div>
  )
}

export default Dummy