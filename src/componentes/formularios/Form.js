import "./form.css"


function Formulario({valorFor, valorId, handlerChange}) {
    
    return(
        
            
                      <div className="form-check form-switch p-2 diseño mb-5">
                        <input className="form-check-input ms-1 pt-2" type="checkbox" role="switch" id={valorId} onChange={handlerChange}/>
                        <label className="form-check-label" htmlFor={valorId}> {valorFor} </label>
                      </div>
    
        
    )
}
export default Formulario