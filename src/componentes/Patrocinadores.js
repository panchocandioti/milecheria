import React from 'react'
import LogoSalto from '../multimedia/Logo Salto Agro.png';
import LogoML1 from '../multimedia/Logo ML1.png'

function Patrocinadores() {
  return (
    <div>
    <div className='seccion'>
          <h2>Patrocinadores</h2>
          <div className='logos'>
            <img src={LogoSalto} alt='LogoSalto' className='logo'></img>
            <img src={LogoML1} alt='LogoML1' className='logo'></img>
          </div>
        </div>
    </div>
  )
}

export default Patrocinadores