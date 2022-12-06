import React from 'react'

const Item = (unProducto) => {
  const arrayProductos = JSON.parse(localStorage.getItem("productosVta"));
  let arrayProductosCategoria = arrayProductos.filter(prod => prod.id == unProducto);

  return (
    <>
      <a>{unProducto.nombre}</a>
    <button>{unProducto.nombre}</button><br/>
    </>
  )
}

export default Item