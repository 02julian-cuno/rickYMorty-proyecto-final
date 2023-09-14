function Nav() {
    return(
        <nav className="navbar navbar-expand-lg w-100 bg-blue">
            <div className="container-fluid justify-content-between align-items-center">
                        <a className="text"><h1 className="navbar-brand ">Rick & Morty</h1></a>
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav nav-pills p-4">
                            <li className="nav-item continuo m-2"><a className="continuo p-2">Characters</a></li>
                            <li className="nav-item m-2"><a className="no-continuo p-2">Contact</a></li>

                        </ul>
                    </div>
                   
                   
               
               
            </div>
           </nav>
    )
    
}
export default Nav