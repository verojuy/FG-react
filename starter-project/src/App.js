import './App.css';
import Mensaje from './Mensaje';
const Name=()=>{
  return <h1>Fabian Gonzalez Fotografias</h1>
}
const Fotos=()=>{
  return <h1> Carrusel de fotos</h1>
}


function App() {
  return (
    <div className="App">
      <Name/>
      <Fotos/>
      <Mensaje  color="rojo" message="esperacio para hablar de fotos"/>
      <Mensaje message=" fotos o videos"/>
    </div>
  );
}

export default App;
