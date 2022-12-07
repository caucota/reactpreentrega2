import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./ItemCount.css";

function ItemCount() {
    const [contador, setContador] = useState(0);
    return (
        <div className='card__button__container'>
            <Button className="card__button detail__button" onClick={()=> contador > 0 ? setContador(contador - 1): contador}>-</Button>
            <div className='card__counter'>{contador}</div>
            <Button className="card__button detail__button" onClick={()=> setContador(contador + 1)}>+</Button>
        </div>
    )
}

export default ItemCount;