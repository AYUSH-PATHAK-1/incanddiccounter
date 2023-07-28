import React, { useState } from 'react';
import './index.css';


function App() {
  const [numbers,setNumbers]=useState(0);
  const incrementnumber=()=>{
    setNumbers(numbers+1);
  }
  const decrementnumber=()=>{
    if(numbers>0){
    setNumbers(numbers-1);
  }else{
    setNumbers(0);
    alert("Number Can't be less than 0")
  }}

  return (
    <>
    <body>
    <div className="container my-5">
      <div className="text-center">
        <h1 className="text-dark">{numbers}</h1>
        <button className="btn btn-warning mx-2" onClick={incrementnumber}>Increment</button>
        <button className="btn btn-danger my-5" onClick={decrementnumber}>Decrement</button>
      </div>
    </div>
    </body>
    </>
  )
}

export default App