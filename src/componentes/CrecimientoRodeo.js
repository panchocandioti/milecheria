import React from 'react'
import rodeo from '../multimedia/crecimiento_rodeo.jpg';

function CrecimientoRodeo() {
    return (
        <div>
            <div className='seccion'>
                <h2>CRECIMIENTO DEL RODEO LECHERO</h2>
                <img src={rodeo} className='diapo' alt='crecimiento_rodeo'></img>
                <div className='descripcion'>
                    <h3>Descripción:</h3>
                    <div className='texto'>
                        <p>Aplicación web que permite calcular el crecimiento genuino del rodeo lechero (sin compra de vacas ni vaquillonas).</p>
                        <p>Simula su evolución a cinco años. Permite evaluar cómo impactan determinados cambios en los parámetros del rodeo sobre su evolución. </p>
                        <p>Compara escenarios alternativos con la situación original. Emite reportes para descargar en formato PDF.</p>
                    </div>
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
    )
}

export default CrecimientoRodeo