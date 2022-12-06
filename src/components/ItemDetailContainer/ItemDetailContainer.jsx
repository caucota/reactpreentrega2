import React from 'react'
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const {id} = useParams();
  const arrayProductos = JSON.parse(localStorage.getItem("productosVta"));
  let productoSeleccionado = arrayProductos.filter(prod => prod.id == id);


  return (
    <div className='cartUnProd'>
      <div>{productoSeleccionado[0].nombre}</div>
      <img src={productoSeleccionado[0].img}></img>
    </div>
  )
}

export default ItemDetailContainer