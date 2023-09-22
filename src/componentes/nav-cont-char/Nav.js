import "./nav.css"

function Nav() {
 



    return(
        <nav className="navbar navbar-expand-lg w-100 fondo">
            <div className="container-fluid justify-content-between align-items-center">
                        <a className="text" ><h1 className="navbar-brand ">Rick & Morty</h1></a>
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav nav-pills p-4">
                            <li className="nav-item continuo m-2"><a className="continuo" >Characters</a></li>
                            <li className="nav-item m-2"><a className="no-continuo cambio"  >Contact</a></li>
                        </ul>
                    </div>
                   
                   
               
               
            </div>
           </nav>
    )
    
}
export default Nav