import './App.css';
import {ComponenteFuncion} from "./components/ComponenteFuncion/ComponenteFuncion";
import {ComponenteClase} from "./components/ComponenteClase/ComponenteClase";
import {ComponentePadre} from "./components/ComponentePadre/ComponentePadre";

function App() {
  const curso = "curso javascript";
  return (
    <div className="App">
      <header className="App-header">
        {/* <ComponenteFuncion title="curso React" comision="1000" color="red" />
        <ComponenteFuncion title="curso HTML" comision="2000" />
        <ComponenteFuncion title={curso} comision="2000" />
        <ComponenteClase/>
        <hr/>
        <p>children</p>
        <ComponentePadre/> */}
      </header>
    </div>
  );
}

export default App;
