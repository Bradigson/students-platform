import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import Page from "./page/Page";
import Inicio from "./components/componentsInfo/Inicio";
import ProgresoSemanal from "./components/componentsInfo/ProgresoSemanal";
import Tareas from "./components/componentsInfo/Tareas";
import Practicas from "./components/componentsInfo/Practicas";
import Calificaciones from "./components/componentsInfo/Calificaciones";


import {Routes, Route} from 'react-router-dom';
const App = ()=>{

  return(
    <div>
      <Routes>
        <Route path='/' element={<LogInForm/>}/>
        <Route path='signin' element={<SignUpForm/>}/>
        <Route path='homepage' element={<Page/>}>
          <Route path='inicio' element={<Inicio name={<h1>Inicio</h1>}/>}/>
          <Route path='progresosemanal' element={<ProgresoSemanal name={<h1>Progreso Semanal</h1>} />}/>
          <Route path='tareas' element={<Tareas name={<h1>Tareas</h1>}/>}/>
          <Route path='practicas' element={<Practicas name={<h1>Practicas</h1>}/>}/>
          <Route path='calificacion' element={<Calificaciones name={<h1>Calificaciones</h1>}/>}/>
        </Route>
        <Route path='*' element={<h1>Erroror 404</h1>}/>
      </Routes>
     
    </div> 
  )
}

export default App;