import React from 'react'
import { useParams } from 'react-router-dom';
import './TipoProducto.css'

const TipoProducto = () => {
    const tiposProductos = JSON.parse(localStorage.getItem("tiposProductos"));
    let {id} = useParams();
    id = id -1;

  return (
    <div  codigo={id}>
        <img className='tipoProd__imagen' src={tiposProductos[id].img}/>
        <h1>{tiposProductos[id].nombre}</h1>
    </div>
  )
}

export default TipoProducto