import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer title="listado" hamburguesa="curso react"/>
    </div>
  );
}

export default App;
