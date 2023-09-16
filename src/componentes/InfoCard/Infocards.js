

import "./info.css"
function InfoCard({estado, especies, origen, genero, setShow}) {
  return(
     <div>
      <button onClick={()=>setShow(false)}>X</button>
    <ul className="list-group ">
  <li className="list-group-item">{estado} </li>
  <li className="list-group-item">{especies}</li>
  <li className="list-group-item">{origen}</li>
  <li className="list-group-item">{genero}</li>
</ul>
  </div>
  )
 


}

export default InfoCard