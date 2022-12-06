import React from 'react'

const Item = ({unProducto}) => {
  return (
    <>
      <a href={'/item/'+ unProducto.id} >{unProducto.nombre}</a>
      <br/>
    </>
  )
}

export default Item