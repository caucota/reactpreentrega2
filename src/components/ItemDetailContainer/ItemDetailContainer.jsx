import React from 'react';
import { productosVta } from '../../mock';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const {id} = useParams();
  let productoSeleccionado = productosVta.filter(prod => prod.id == id);


  return (
    <div className='cartUnProd'>
      <div>{productoSeleccionado[0].nombre}</div>
      <img src={productoSeleccionado[0].img}></img>
    </div>
  )
}

export default ItemDetailContainer