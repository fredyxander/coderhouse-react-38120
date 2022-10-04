import './App.css';
import React from 'react';
import { PracticaCors } from './components/Temas/PracticaCors/PracticaCors';

function App() {

  return (
    <React.Fragment>
      <div className="App">

          <hr/>
          <p className='titulo'>Validacion CORS</p>
          <div className='seccion-tema'>
            <PracticaCors/>
          </div>

      </div>
    </React.Fragment>
  );
}

export default App;
