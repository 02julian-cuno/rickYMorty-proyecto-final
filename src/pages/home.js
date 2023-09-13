 import Navegacion from "../componentes/navegacion/navegacion";
 import "../home.css"

function Home() {
    return(
        <header className="altura container-fluid d-flex flex-column justify-content-center align-items-center">
            <div className="fondo-blanco d-flex flex-column justify-content-center">
                 <h1 className="row justify-content-center">Proyect Rick & Morty</h1>

                 <h2 className="text-center p-3">Helcome to Rick & Morty Proyect!</h2>

                 <p className="text-center p-2">This proyect was made for practising React and to made a functional website</p>

                <p className="text-center">In this website you can know information of the characters of this animated series.
            
                    <br/>

                    Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>

            <h2 className="text-center p-3">Lets go!</h2>

            <Navegacion/>

            </div>
           
        </header>
    )
        
    
}
export default Home;