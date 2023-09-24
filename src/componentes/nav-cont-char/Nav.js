import { Link } from "react-router-dom"
import "./nav.css"

function Nav() {
 




    return(
        <nav className="navbar navbar-expand-lg fondo">
            <div className="d-flex justify-content-center align-self-end w-100">
                <div className="container-fluid d-flex justify-content-between align-items-center media-screen">
                    <Link to="/" className="text" ><h1 className="navbar-brand titulo ">Rick & Morty</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item continuo m-2"><Link to="/Character" className="continuo">Characters</Link></li>
                        <li className="nav-item m-2"><Link to="/Contact" className="no-continuo" >Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>







        // <nav className="navbar navbar-expand-lg w-100 fondo">
             
        //     <div className="container-fluid justify-content-between align-items-center">
        //         <Link to="/" className="text" ><h1 className="navbar-brand titulo ">Rick & Morty</h1></Link>
                
                
        //         <div className="d-flex flex-column align-items-end">
        //             <button class="navbar-toggler mt-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
                    
        //                 <ul className="enlaces p-4">
        //                     <li className="nav-item continuo m-2"><Link to="/Character" className="continuo">Characters</Link></li>
        //                     <li className="nav-item m-2"><Link to="/Contact" className="no-continuo" >Contact</Link></li>
        //                 </ul>
        //             </div>
                   
                   
               
               
        //     </div>
        //    </nav>
    )
    
}
export default Nav