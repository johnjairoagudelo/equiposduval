import './App.css';
import Herramientas from "./componentes/Herramientas";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
       <h1>Estas son algunas que Equipos Duval tiene para su servicio.</h1>
       <Herramientas 
       nombre="Apisonador Canguro"
       funcionamiento="A Gasolina"
       descripcion="mmmjbghbkhjyfkjfhjfmhhggghgh"
       imagen="apisonador-canguro"/>
       <Herramientas 
       nombre="Apisonador Rana"
       funcionamiento="A Gasolina"
       descripcion="mmmjbghbkhjyfkjfhjfmhhggghgh"
       imagen="apisonador-rana"/>
       <Herramientas 
       nombre="Rompe Pavimento"
       funcionamiento="electrico a 110 V."
       descripcion="mmmjbghbkhjyfkjfhjfmhhggghgh"
       imagen="rompe-pavimento"/>
      </div>
    </div>
  );
}

export default App;
