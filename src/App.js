import MiLecheria from './multimedia/Logo MiLecheria.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={MiLecheria} className="App-logo" alt="logo" />
      </header>
      <body>
        <div className='seccion'>
          OLE!5.5
        </div>
        <div className='seccion'>
          MONITOR LECHERO
        </div>
        <div className='seccion'>
          CRECIMIENTO DEL RODEO LECHERO
        </div>
      </body>
    </div>
  );
}

export default App;
