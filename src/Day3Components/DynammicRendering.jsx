import {useState} from 'react'

const DynammicRendering =()=> {
    const[selectedFrameWork,setSelectedFrameWork]=useState(0);

    const a=[
        "ReactJS","NodeJS","AngularJS","VueJS","NextJS","NodeJS"
    ]
  return (
    <>
    <h1 style={{alignContent:"center;"}}>Clicked FrameWork: {selectedFrameWork}</h1>
    <ul type="circle">
        {a.map((elements,index)=>(
            <b><li key={index} onClick={()=>{setSelectedFrameWork(index);}}>{elements}</li></b>
        ))}
    </ul>
    </>
  );
};

export default DynammicRendering;