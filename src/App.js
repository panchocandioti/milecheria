import React from 'react';
import Hola from './componentes/Hola';
import MiLecheria from './multimedia/Logo MiLecheria.jpg';
import './App.css';
import Patrocinadores from './componentes/Patrocinadores';
import Ole from './componentes/Ole';
import CrecimientoRodeo from './componentes/CrecimientoRodeo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={MiLecheria} className="App-logo" alt="logo" />
      </header>
      <div>
        <Hola />
        <Patrocinadores />
        <Ole />
        <CrecimientoRodeo />
      </div>
    </div>
  );
}

export default App;
