
import  "./navegacion.css";
// import { Link } from "react-router-dom";


function Navegacion({}) {
    return(
        <nav className="row navbar align-items-center">

          <ul className="nav nav-pills justify-content-center">

            <li className="nav-item"><a className="nav-link active m-2 p-3 boton " href="#">Characters</a></li>
            <li className="nav-item"><a className="nav-link active m-2 p-3 boton" href="#">Contact</a></li>
            
          </ul>
          
        </nav> 
    )
}
export default Navegacion;