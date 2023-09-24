import {Fragment, useState, useEffect} from "react"
import Nav from "../../componentes/nav-cont-char/Nav"
import Cards from "../../componentes/cards/Cards";
import Formulario from "../../componentes/formularios/Form";
import "./characters.css"
// import Characters2 from "./characters2"; // los demas personajes



function Character() {

  let [personajes, setPersonajes]=useState([]);
  let [listaCompleta, setListaCompleta]=useState([]);
  let [formulario]=useState([
    {
      name:'Alive',
      filter: 'Characters Alive'
    },

    {
      name: 'Dead',
      filter: 'Character Dead'
    },

    {
      name:'Female',
      filter:'Female'
    },

    {
      name:'Male',
      filter:'Male'
    }, 

    {
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
    <Nav/>
       <section className="container-fluid">
          <h2 className="tituloCharacters mt-5 ">Filters</h2>

            <form className="d-flex justify-content-between align-items-center flex-wrap">
              {formulario.map((formu)=>{
              return <Formulario key={formu} valorFor={formu.filter} valorId={formu.name} handlerChange={filtrarPersonaje}  />
             }) } 
            </form>
             

            
      </section> 

<main className="container-fluid">
  <div className="row card-section justify-content-center align-items-center">

       {personajes.map((personaje)=>{ 
        
          return <Cards key={personaje.id} data={personaje} />
      
       
       
        })
        }
        {/* <Characters2/>*/}

      </div> 
</main>
      
      
        </Fragment>
     
      )
}


export default Character 