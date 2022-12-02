import React from 'react'
import './TipoProducto.css'

const TipoProducto = ({tipProd}) => {
  return (
    <div  codigo={tipProd.id}>
        <img className='tipoProd__imagen' src={tipProd.img}/>
        <h1>{tipProd.nombre}</h1>
    </div>
  )
}

export default TipoProducto