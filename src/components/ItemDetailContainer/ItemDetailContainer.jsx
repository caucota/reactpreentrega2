import React from 'react';
import { productosVta } from '../../mock';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
//import Item from '../Item/Item';

const ItemDetailContainer = () => {
  const {id} = useParams();
  let productoSeleccionado = productosVta.filter(prod => prod.id == id);

  return (
    <div className='card__detail__container'>
      <Card className="card__container" key={"Card" + productoSeleccionado[0].id} style={{ width: '15rem' }}>
          <Card.Img className="card__imagen" variant="top" src={productoSeleccionado[0].img} />
          <Card.Body className="card__body">
            <Card.Title className="card__title">{productoSeleccionado[0].nombre}</Card.Title>
            <Card.Text className="card__text">
              {"$" + productoSeleccionado[0].precio}
            </Card.Text>
            <ItemCount />
            {/* <div className='card__button__container'>
              <Button className="card__button detail__button">+</Button>
              <div className='card__counter'>1</div>
              <Button className="card__button detail__button">-</Button>
            </div> */}
          </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetailContainer