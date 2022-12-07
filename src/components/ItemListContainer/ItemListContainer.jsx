import React from "react";
import ItemList from '../ItemList/ItemList';
import { useParams} from 'react-router-dom';

const ItemListContainer = (() => {
    let {nombreCategoria} = useParams();
    if(nombreCategoria == undefined){
        nombreCategoria = '';
    }
    
    return( 
        <div>
            <ItemList tipoProd = {nombreCategoria}/>
        </div>
    )
});

export default ItemListContainer;