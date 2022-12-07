import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"
import { productosVta } from '../../mock';
/*
const MostrarDetalleProdAsyn = new Promise((resolve, rejected)=> {
  setTimeout(()=>{
    const arrayArt = [{id:1, title:'Naranjas', description: 'Precio por kg', price:180, pictureUrl:'https://www.bing.com/ck/a?!&&p=1e3330feb6d21734JmltdHM9MTY2OTUwNzIwMCZpZ3VpZD0zOTE3ZDUzMi1mNDgwLTYzZmMtM2NiZi1jNzUxZjUyZTYyMDAmaW5zaWQ9NTQwMA&ptn=3&hsh=3&fclid=3917d532-f480-63fc-3cbf-c751f52e6200&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZW4rbmFyYW5qYSZpZD0yMjJBRUYyMkQ1REM2MzRDMTNGRkRFQUNCNzBGMEQxMEYzNUYxMTgwJkZPUk09SVFGUkJB&ntb=1'},
    {id:2, title:'Manzanas', description: 'Precio por kg', price:520, pictureUrl:'https://www.bing.com/ck/a?!&&p=eb1d33ae905318daJmltdHM9MTY2OTUwNzIwMCZpZ3VpZD0zOTE3ZDUzMi1mNDgwLTYzZmMtM2NiZi1jNzUxZjUyZTYyMDAmaW5zaWQ9NTQ3Nw&ptn=3&hsh=3&fclid=3917d532-f480-63fc-3cbf-c751f52e6200&u=a1L2ltYWdlcy9zZWFyY2g_cT1JbWFnZW4lMjBNYW56YW5hJTIwcm9qYSZGT1JNPUlRRlJCQSZpZD1BMzkxMEE3OEQwQzY0QzY3NzIyNkI0OEMxQTE3MUJFRUE2MDY3Q0JG&ntb=1'},
    {id:3, title:'Bananas', description: 'Precio por unidad', price:520, pictureUrl:'https://www.bing.com/ck/a?!&&p=5e2f5174a9103a8eJmltdHM9MTY2OTUwNzIwMCZpZ3VpZD0zOTE3ZDUzMi1mNDgwLTYzZmMtM2NiZi1jNzUxZjUyZTYyMDAmaW5zaWQ9NTUwNQ&ptn=3&hsh=3&fclid=3917d532-f480-63fc-3cbf-c751f52e6200&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZW4lMjBCYW5hbmEmRk9STT1JUUZSQkEmaWQ9NDg4MDRBMDRBMUVFOTAwNEREMDEyNkE4QTk4NTdGN0M3NjEwMTAzOA&ntb=1'},
    ];
    resolve(arrayArt);
  }, 3000
  )
}

)

const ItemList = () => {
    const arrayProductos2 = [{id:1, title:'Naranjas', description: 'Precio por kg', price:180, pictureUrl:'https://www.bing.com/ck/a?!&&p=1e3330feb6d21734JmltdHM9MTY2OTUwNzIwMCZpZ3VpZD0zOTE3ZDUzMi1mNDgwLTYzZmMtM2NiZi1jNzUxZjUyZTYyMDAmaW5zaWQ9NTQwMA&ptn=3&hsh=3&fclid=3917d532-f480-63fc-3cbf-c751f52e6200&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZW4rbmFyYW5qYSZpZD0yMjJBRUYyMkQ1REM2MzRDMTNGRkRFQUNCNzBGMEQxMEYzNUYxMTgwJkZPUk09SVFGUkJB&ntb=1'},
                            {id:2, title:'Manzanas', description: 'Precio por kg', price:520, pictureUrl:'https://www.bing.com/ck/a?!&&p=eb1d33ae905318daJmltdHM9MTY2OTUwNzIwMCZpZ3VpZD0zOTE3ZDUzMi1mNDgwLTYzZmMtM2NiZi1jNzUxZjUyZTYyMDAmaW5zaWQ9NTQ3Nw&ptn=3&hsh=3&fclid=3917d532-f480-63fc-3cbf-c751f52e6200&u=a1L2ltYWdlcy9zZWFyY2g_cT1JbWFnZW4lMjBNYW56YW5hJTIwcm9qYSZGT1JNPUlRRlJCQSZpZD1BMzkxMEE3OEQwQzY0QzY3NzIyNkI0OEMxQTE3MUJFRUE2MDY3Q0JG&ntb=1'},
                            {id:3, title:'Bananas', description: 'Precio por unidad', price:520, pictureUrl:'https://www.bing.com/ck/a?!&&p=5e2f5174a9103a8eJmltdHM9MTY2OTUwNzIwMCZpZ3VpZD0zOTE3ZDUzMi1mNDgwLTYzZmMtM2NiZi1jNzUxZjUyZTYyMDAmaW5zaWQ9NTUwNQ&ptn=3&hsh=3&fclid=3917d532-f480-63fc-3cbf-c751f52e6200&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZW4lMjBCYW5hbmEmRk9STT1JUUZSQkEmaWQ9NDg4MDRBMDRBMUVFOTAwNEREMDEyNkE4QTk4NTdGN0M3NjEwMTAzOA&ntb=1'},
]
  let arrayProductos = [];
  MostrarDetalleProdAsyn.then((result)=>{
    arrayProductos = result;
    console.log(arrayProductos)

  });
  return (
    <div>
        {
          arrayProductos.map(prod => {
                return <Item key={'producto_'+prod.id} title={prod.title}/>
            }
          )
        }

    </div>
  )
}
*/
const ItemList = ({tipoProd}) => {
  //const arrayProductos = JSON.parse(localStorage.getItem("productosVta"));
  let arrayProductosCategoria = productosVta;
  if(tipoProd !== '' ){
    arrayProductosCategoria = productosVta.filter(prod => prod.tipo == tipoProd);
  }
  return (
    <div className='cards__container'>
        {
          arrayProductosCategoria.map(prod => {
                return <Item key={'producto_'+prod.id} unProducto={prod}/>
            }
          )
        }

    </div>
  )
}

export default ItemList