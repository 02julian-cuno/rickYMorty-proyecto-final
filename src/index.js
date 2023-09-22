import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Link, BrowserRouter} from 'react-router-dom';
// import Home from './paginas/home';
// import Route from './componentes/routerPag/Route';
// import Character from './paginas/Characters/Character';
import Home from './paginas/home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Home/>
    <Link to='/Character'></Link>
   
   
   
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
