import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css";

const Item = ({ unProducto }) => {
  return (
    <>
      <Card key={"Card" + unProducto.id} style={{ width: '1rem' }}>
        <Card.Title>{unProducto.nombre}</Card.Title>
        <Card.Img className="card__imagen" variant="top" src={unProducto.img} />
        <Card.Body>
          <Card.Text>
            {"$" + unProducto.precio}
          </Card.Text>
          <Button href={'/item/' + unProducto.id} variant="primary">Ver</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Item