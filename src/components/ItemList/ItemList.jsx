import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"
import { productosVta } from '../../mock';
import { useState, useEffect } from 'react';

const ItemList = ({tipoProd}) => {
  const [item, setItem] = useState(productosVta);
  let arrayProductosCategoria = productosVta;
  const FiltrarProductos = new Promise((resolve, reject)=>{
      if(tipoProd !== '' ){
        arrayProductosCategoria = productosVta.filter((prod) => prod.tipo == tipoProd)
      }
      resolve(arrayProductosCategoria);
  }
  )
  useEffect( ()=>{
    FiltrarProductos.then( (response)=>{
      setItem(response)
    })
  }, [tipoProd])
  return(
    <div>
        {
          arrayProductosCategoria && arrayProductosCategoria.map(prod => {
                return <Item key={'producto_'+prod.id} unProducto={prod}/>
            }
          )
        }

    </div>    
  )

}

export default ItemList