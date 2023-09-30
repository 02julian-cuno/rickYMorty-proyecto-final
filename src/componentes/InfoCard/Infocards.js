

import "./info.css"
function InfoCard({estado, especies, origen, genero, setShow}) {


  return(
        <div className="d-flex p-5 flex-column align-items-center cardInfo">
          <button className="cruz d-flex align-self-end m-2 btn-x-md" onClick={()=>setShow(false)} > <i class="bi bi-x-lg boton-close"></i></button>

          <ul className="carctGeneral">
          <li className="caracteristicas p-3 d-flex flex-column"><span className="fw-bold">Character Status {estado}</span></li>       
          <li className="caracteristicas p-3 d-flex flex-column"><span className="fw-bold">Species</span>{especies}</li>       
          <li className="caracteristicas p-3 d-flex flex-column"><span className="fw-bold">Origin</span>{origen}</li>      
          <li className="caracteristicas p-3 d-flex flex-column"><span className="fw-bold">Gender</span>{genero}</li>
          </ul>

  </div>
)
}

export default InfoCard