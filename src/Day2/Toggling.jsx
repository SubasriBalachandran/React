import {useState} from 'react'

const Toggling=()=> {
    const [Visisble,setVisible]=useState(false);
    const click=()=>{
        setVisible(!Visisble);
    };
  return (
    <div>
        <button onClick={click}>Display Message</button>
        {Visisble===true?<p><strong><center>Hello Everyone!</center></strong></p>:null}
    </div>
  )
}

export default Toggling