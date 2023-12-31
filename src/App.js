import MiLecheria from './multimedia/Logo MiLecheria.jpg';
import OLE from './multimedia/OLE.jpg';
import rodeo from './multimedia/crecimiento_rodeo.jpg';
import LogoSalto from './multimedia/Logo Salto Agro.png';
import LogoML1 from './multimedia/Logo ML1.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={MiLecheria} className="App-logo" alt="logo" />
      </header>
      <div>
        <div className='seccion'>
          <h2>¡Hola, qué bueno que estés aquí!</h2>
          <div className='descripcion'>
            <p>En este sitio encontrarás herramientas simples para la gestión de establecimientos lecheros sin importar su tamaño.</p>
            <p>Para poder notificarte de novedades y actualizaciones te sugiero <a href='https://forms.gle/Q12JUazDxuxbRSP7A' target="_blank" rel="noopener noreferrer">registrarte</a>.</p>
            <p>Más abajo podrás acceder a las aplicaciones disponibles que serán cada vez más.</p>
            <p>Espero que aprendas a utilizarlas y te sirvan mucho en tu formación y en tu trabajo.</p>
            <p><b><a href='https://www.linkedin.com/in/francisco-candioti-0b167834/' target="_blank" rel="noopener noreferrer">Ing. Agr. EPL Francisco Candioti</a></b>   <a href='mailto:panchocandioti@gmail.com'>panchocandioti@gmail.com</a></p>
          </div>
        </div>
        <div className='seccion'>
          <h2>Patrocinadores</h2>
          <div className='logos'>
            <img src={LogoSalto} alt='LogoSalto' className='logo'></img>
            <img src={LogoML1} alt='LogoML1' className='logo'></img>
          </div>
        </div>
        <div className='seccion'>
          <h2>OLE! 5.5</h2>
          <img src={OLE} className='diapo' alt='OLE'></img>
          <div className='descripcion'>
            <h3>Descripción:</h3>
            <p>Modelo de simulación de sistema de producción completo. Para utilizar en la etapa de planificación.</p>
            <p>Con datos de entrada de obtención sencilla estima resultados físicos, económicos, sociales y ambientales.</p>
            <p>Permite evaluar en profundidad muchas estrategias alternativas en poco tiempo antes de su puesta en práctica.</p>
            <p>Desarrollado en el marco del proyecto <a href='https://www.fontagro.org/new/proyectos/lecheria-sostenible/es' target="_blank" rel="noopener noreferrer">LACTIS</a>. Se adapta a diferentes sistemas de producción de leche.</p>
          </div>
          <div className='generalidades'>
            <ul>
              <li><b>Requerimientos:</b> Excel 2010 o superior</li>
              <li><b>Sistema operativo:</b> Windows</li>
              <li><b>Dispositivos:</b> ordenador</li>
              <li><b>Tipo de licencia:</b> gratuita</li>
              <li><b>Videos tutoriales:</b> disponibles</li>
              <li><b>Guía del usuario:</b> disponible</li>
              <li><b>Ayudas rápidas: </b> disponibles</li>
            </ul>
          </div>
          <br></br>
          <div>
            <h3>Curso online gratuito:</h3>
            <p>El curso está dividido en 4 bloques y dura aproximadamente 2 horas en total. Es muy recomendable que tomes el curso para aprender y comprender el funcionamiento del modelo y aprovecharlo al máximo.</p>
          </div>
          <div className="videos">
            <iframe className='video' width="336" height="189" src="https://www.youtube.com/embed/f5rHee5utIo?si=UsHZml1LhXyrFCfJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe className='video' width="336" height="189" src="https://www.youtube.com/embed/rusvUdw_VX4?si=5_OJhdGUq4qS33EH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe className='video' width="336" height="189" src="https://www.youtube.com/embed/b0vxFNA1tEQ?si=lKWHBF2hiX_BCFEC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe className='video' width="336" height="189" src="https://www.youtube.com/embed/M7IsNSmlaCs?si=0CwdYoJ6Btuvl_Mw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <br></br>
          <a href='https://forms.gle/rZMNWPBJ9BEve6cL9' target="_blank" rel="noopener noreferrer">Ir al formulario de descarga</a>
          <br></br>
        </div>
        <div className='seccion'>
          <h2>CRECIMIENTO DEL RODEO LECHERO</h2>
          <img src={rodeo} className='diapo' alt='crecimiento_rodeo'></img>
          <div className='descripcion'>
            <h3>Descripción:</h3>
            <p>Aplicación web que permite calcular el crecimiento genuino del rodeo lechero (sin compra de vacas ni vaquillonas).</p>
            <p>Simula su evolución a cinco años. Permite evaluar cómo impactan determinados cambios en los parámetros del rodeo sobre su evolución. </p>
            <p>Compara escenarios alternativos con la situación original. Emite reportes para descargar en formato PDF.</p>
          </div>
          <div className='generalidades'>
            <ul>
              <li><b>Requerimientos:</b> navegador web</li>
              <li><b>Sistema operativo:</b> cualquiera</li>
              <li><b>Dispositivos:</b> cualquiera</li>
              <li><b>Tipo de licencia:</b> gratuita</li>
              <li><b>Videos tutoriales:</b> no disponibles</li>
              <li><b>Guía del usuario:</b> no disponible</li>
              <li><b>Ayudas rápidas: </b> disponibles</li>
            </ul>
          </div>
          <br></br>
          <a href='https://panchocandioti.github.io/crecimiento-rodeo/' target="_blank" rel="noopener noreferrer">Ir a la aplicación</a>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default App;
