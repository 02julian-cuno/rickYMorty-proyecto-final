import {Fragment, useState, useEffect} from "react"
import Nav from "../../componentes/nav-cont-char/Nav"
import Cards from "../../componentes/cards/Cards";
import Formulario from "../../componentes/formularios/Form";
import "./characters.css"
import filter from "../../filter-icon.svg"
// import Characters2 from "./characters2"; // los demas personajes



function Character() {
  

  let [personajes, setPersonajes]=useState([]);
  let [listaCompleta, setListaCompleta]=useState([]);
  let [formulario]=useState([
    {
      id: 'a',
      name:'Alive',
      filter: 'Characters Alive'
    },

    {
      id: 'b',
      name: 'Dead',
      filter: 'Character Dead'
    },

    {
      id: 'c',
      name:'Female',
      filter:'Female'
    },

    {
      id: 'd',
      name:'Male',
      filter:'Male'
    }, 

    {
      id: 'e',
      name:'unknown',
      filter: 'Origin unknown '
    }]);
    let[filtrosAplicados,setFiltrosAplicados]=useState([]);
      
  let traerPersonajes= async ()=>{
    let dato = await fetch("https://rickandmortyapi.com/api/character")
    .then(respuesta=>respuesta.json())
    .catch(error=>console.log("Hubo un error: " + error));

    return dato;
  }

 

  let filtrarPersonaje=(event)=>{
     let verificar = event.target.id;
  
if(event.target.checked === true){
  setFiltrosAplicados([...filtrosAplicados,verificar]);
  
} else{
      let filtrosRestantes= filtrosAplicados.filter((el)=>el !== verificar)
      setFiltrosAplicados(filtrosRestantes)
      setPersonajes(listaCompleta);
    }
    
  }

  useEffect(()=>{
    let guardarPersonajes=async()=>{
        let info =await traerPersonajes();
    
        let listaPersonajes=info.results;

        setPersonajes(listaPersonajes);
        setListaCompleta(listaPersonajes);
    }
    
    guardarPersonajes();
},[])

useEffect(()=>{

 
   filtrosAplicados.forEach((verificar)=>{
  
            if(verificar === "Alive" || verificar === "Dead"){
                let resultado= personajes.filter((personaje)=>personaje.status=== verificar)
                setPersonajes(resultado)
            } if(verificar === "Female" || verificar === "Male"){
                let resultado= personajes.filter((personaje)=>personaje.gender=== verificar)
                setPersonajes(resultado)
            } if(verificar === "unknown" ){
                let resultado= personajes.filter((personaje)=>personaje.origin.name === verificar)
                setPersonajes(resultado)
            }
            })
            },[filtrosAplicados])
          
  

return(

  <Fragment>
    <Nav itemsMenu={"Character"}/>
      <main className="container-fluid">

       <section className="media-screen row py-5">
        
        <div className="div-media d-flex align-items-center m-2">
          <h2 className="tituloCharacters">Filters</h2>

          <a className="btn boton-media" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
            <img src={filter} alt="filtro-logo"/>
          </a>

        </div> 

          <div className="collapse flex-wrap justify-content-between filters" id="multiCollapseExample1">

          
              {formulario.map((formu)=>{
              return <Formulario key={formu.id} valorFor={formu.filter} valorId={formu.name} handlerChange={filtrarPersonaje}  />
             })} 
         
        </div>
          
          </section> 
          

           
      


  <div className="row card-section justify-content-center align-items-center">

       {personajes.length>0?
          personajes.map((personaje)=>{ 
        
          return <Cards key={personaje.id} data={personaje} />
      
       
       
        }): 
        <div className="container-fluid">
          <div className="alert d-flex gap-2 align-items-center" role="alert">
              <i className="bi bi-exclamation-triangle-fill alerta"></i>
              <p className='m-0'>Sorry! There are no characters with those properties</p>
            </div>
        </div>
        }
       
        
        {/* <Characters2/>*/}

      </div> 
</main>
      
      
        </Fragment>
     
      )
}


export default Character 