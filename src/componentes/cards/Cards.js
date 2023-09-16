
import { useState } from "react";
import InfoCard from "../InfoCard/Infocards"
import "./cards.css"


function Cards({data}) {
    const [show, setShow]=useState(false);
    const [hide, setHide]=useState("d-block");

    const mostrarLista=()=>{
        setShow(true);
        setHide('d-none')
    }
  
return(
    <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">

    <div className="d-flex flex-column justify-content-between align-items-center">

        <img src={data.image} alt="imagen-personaje..." />
        <h2 className="size-name text-center hide ">{data.name} </h2>
        <button onClick={()=>setShow(true)} className="btn btn-active align-self-end more boton">know More..</button>
       {show===true? <InfoCard estado={data.status} especies={data.species} origen={data.origin.name} genero={data.gender} setShow={setShow} /> :""} 

    </div>
      
    </div>
 
      
   
     
)
    

    
}

export default Cards