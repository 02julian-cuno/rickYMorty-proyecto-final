import {Fragment, useState, useEffect} from "react"
import Nav from "../../componentes/nav-cont-char/Nav"
import Cards from "../../componentes/cards/Cards";



function Character() {

  let [personajes, setPersonajes]=useState([]);

  let traerPersonajes= async ()=>{
    let dato = await fetch("https://rickandmortyapi.com/api/character")
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

  <Fragment>
    <Nav/>
       <div>
          <h2 className="tituloCharacters">Filters</h2>
          <p>aca van los filtros....</p>
      </div> 

<main className="container-fluid">
  <div className="row card-section justify-content-center align-items-center">

       {personajes.map((personaje)=>{
          return <Cards key={personaje.id} data={personaje} />
       
       
       
        })}
        

      </div>
</main>
      
      
        </Fragment>
     
      )
}

export default Character 