import React from 'react'
import OLE from '../multimedia/OLE.jpg';

function Ole() {
    return (
        <div>
            <div className='seccion'>
                <h2>OLE! 5.5</h2>
                <img src={OLE} className='diapo' alt='OLE'></img>
                <div className='descripcion'>
                    <h3>Descripción:</h3>
                    <div className='texto'>
                        <p>Modelo de simulación de sistema de producción completo. Para utilizar en la etapa de planificación.</p>
                        <p>Con datos de entrada de obtención sencilla estima resultados físicos, económicos, sociales y ambientales.</p>
                        <p>Permite evaluar en profundidad muchas estrategias alternativas en poco tiempo antes de su puesta en práctica.</p>
                        <p>Desarrollado en el marco del proyecto <a href='https://www.fontagro.org/new/proyectos/lecheria-sostenible/es' target="_blank" rel="noopener noreferrer">LACTIS</a>. Se adapta a diferentes sistemas de producción de leche.</p>
                    </div>
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
                    <div className='texto'>
                        <p>El curso está dividido en 4 bloques y dura aproximadamente 2 horas en total. Es muy recomendable que tomes el curso para aprender y comprender el funcionamiento del modelo y aprovecharlo al máximo.</p>
                    </div>
                </div>
                <div className="videos">
                    <iframe className='video' width="336" height="189" src="https://www.youtube.com/embed/f5rHee5utIo?si=UsHZml1LhXyrFCfJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className='video' width="336" height="189" src="https://www.youtube.com/embed/rusvUdw_VX4?si=5_OJhdGUq4qS33EH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className='video' width="336" height="189" src="https://www.youtube.com/embed/b0vxFNA1tEQ?si=lKWHBF2hiX_BCFEC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className='video' width="336" height="189" src="https://www.youtube.com/embed/M7IsNSmlaCs?si=0CwdYoJ6Btuvl_Mw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <br></br>
                <a href='https://forms.gle/rZMNWPBJ9BEve6cL9' target="_blank" rel="noopener noreferrer">Ir al formulario de descarga</a>
                <br></br>
            </div>
        </div>
    )
}

export default Ole