import {useState} from 'react'

const Transformation=()=> {
    const[currentState,setState]=useState("Kaioken");
  return (
    <div>
        <input type="checkbox" onChange={()=>setState(currentState==="Kaioken"?"SuperSaiyan":"Kaioken")}/>
        <h1>{currentState}</h1>
    </div>
  )
}

export default Transformation