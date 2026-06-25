import React, { useState } from 'react'

const Calculator = () => {
    const [str, setStr] = useState("0")

    const clickHandler = (e)=>{
        if(str == "0"){
            setStr(e.target.innerText)
        }else{
            setStr(str + e.target.innerText);
        }
    }

  return (
    <>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div id="main">
                <div id="input">
                    <input style={{width:"200px", height:"30px", fontSize:"20px"}} type="text" value={str}/>
                </div>
                <div id="box">
                    <div>
                        <button id="upBtn" onClick={()=>{
                            setStr("")
                        }}>AC</button>

                        <button id="upBtn" onClick={()=>{
                            setStr("")
                        }}>C</button>

                        <button id="upBtn" onClick={(e)=>{
                            //setStr(str + e.target.innerText)
                            clickHandler(e)
                        }}>%</button>

                        <button id="operand" onClick={(e)=>{
                            //setStr(str + e.target.innerText)   
                            clickHandler(e)
                        }}>/</button> 

                    </div>

                    <div>
                        <button id="numBtn" onClick={(e)=>{
                            //str=="0"?setStr(e.target.innerText) : setStr(str+e.target.innerText)
                            //setStr(str + e.target.innerText)
                            clickHandler(e)
                        }}>7</button>

                        <button id="numBtn" onClick={(e)=>{
                            //setStr(str + e.target.innerText) 
                            clickHandler(e)
                        }}>8</button>

                        <button id="numBtn" onClick={(e)=>{
                            //setStr(str + e.target.innerText)  
                            clickHandler(e) 
                        }}>9</button>

                        <button id="operand" onClick={(e)=>{
                            //setStr(str + e.target.innerText)   
                            clickHandler(e) 
                        }}>*</button>

                    </div>

                    <div>
                        <button id="numBtn" onClick={(e)=>{
                            //setStr(str + e.target.innerText)
                            clickHandler(e)
                        }}>4</button>

                        <button id="numBtn" onClick={(e)=>{
                            //setStr(str + e.target.innerText)
                            clickHandler(e)
                        }}>5</button>

                        <button id="numBtn" onClick={(e)=>{
                            //setStr(str + e.target.innerText)
                            clickHandler(e)
                        }}>6</button>

                        <button id="operand" onClick={(e)=>{
                            //setStr(str + e.target.innerText)
                            clickHandler(e)
                        }}>-</button> 

                    </div>
                    <div>
                        <button id="numBtn" onClick={(e)=>{
                            //setStr(str + e.target.innerText)
                            clickHandler(e)
                        }}>1</button>

                        <button id="numBtn" onClick={(e)=>{
                            //setStr(str + e.target.innerText)
                            clickHandler(e)
                        }}>2</button>

                        <button id="numBtn" onClick={(e)=>{
                            //setStr(str + e.target.innerText)
                            clickHandler(e)
                        }}>3</button>

                        <button id="operand" onClick={(e)=>{
                            //setStr(str + e.target.innerText)
                            clickHandler(e)
                        }}>+</button> 
                    </div>

                    <div>
                        <button id="numBtn" onClick={(e)=>{
                            //setStr(str + e.target.innerText)
                            clickHandler(e)
                        }}>0</button>

                        <button id="numBtn" onClick={(e)=>{
                            //setStr(str + e.target.innerText)
                            clickHandler(e)
                        }}>.</button>

                        <button id="numBtn">,</button>

                        <button id="operand" onClick={(e)=>{
                            console.log(str)
                            // setStr(eval(str))
                            try{setStr(eval(str))}
                            catch{setStr("err")}
                        }}>=</button>

                         
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Calculator