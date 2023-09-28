import { Link } from "react-router-dom"
import "./nav.css"

function Nav({itemsMenu}) {
 
    

    



    return(
        <nav className="navbar navbar-expand-lg w-100 fondo">
            <div className="container-fluid justify-content-between align-items-center">
                    <Link to="/" className="text" ><h1 className="navbar-brand titulo ">Rick & Morty</h1></Link>

                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list p-1"></i>
                    </button>
                
                <div className="navbar-collapse justify-content-end collapse" id="navbarNav" >
                    <ul className="navbar-nav" href="#navbarNav">
                        <li className="nav-item m-2"><Link to="/Character" className={itemsMenu === 'Character' ? 'continuo active' :'no-continuo'}>Characters</Link></li>
                        <li className="nav-item m-2"><Link to="/Contact"   className={itemsMenu === "Contact" ? 'continuo active': 'no-continuo'} >Contact</Link></li>
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