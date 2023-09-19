import "./form.css"


function Formulario({valorFor, valorId, handlerChange}) {
    
    return(
        
            
                      <div className="form-check form-switch p-4 diseño">
                        <input className="form-check-input" type="checkbox" role="switch" id={valorId} onChange={handlerChange}/>
                        <label className="form-check-label" htmlFor={valorId}>{valorFor} </label>
                      </div>
    
        
    )
}
export default Formulario