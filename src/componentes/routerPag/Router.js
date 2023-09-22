import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../../paginas/home"
import Character from "../../paginas/Characters/Character"
import Contact from "../../paginas/contact/contact"


function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Character" element={<Character/>} />
            <Route path="/Contact" element={<Contact/>} />

        </Routes>
        </BrowserRouter>
    )
}
export default Router