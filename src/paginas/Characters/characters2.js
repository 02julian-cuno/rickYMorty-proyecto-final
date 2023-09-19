import { useEffect, useState, } from "react";
import Cards from "../../componentes/cards/Cards";


function Characters2() {
    let [personajes2, setPersonajes]=useState([]);

    

  let traerPersonajes= async ()=>{
    let dato = await fetch("https://rickandmortyapi.com/api/character/?page=2")
    .then(resp=>resp.json())
    .catch(error=>console.log("Hubo un error: " + error));

    return dato;
  }

  useEffect(()=>{
    let guardarPersonajes=async()=>{
        let info =await traerPersonajes();
    
        let listaPersonajes=info.results;

        setPersonajes(listaPersonajes);
        console.log(listaPersonajes);
    }
    
    guardarPersonajes();
},[])

return(

   <div className="row card-section justify-content-center align-items-center">
     {personajes2.map((personaje)=>{
        return <Cards key={personaje.id} data={personaje} />
    })}
 
   </div>

      
       
    
    
)


}
export default Characters2;