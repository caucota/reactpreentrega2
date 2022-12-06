import './Navbar.css';
import { Link } from 'react-router-dom';

const NavBar = ({tipProd}) => {
    const urlCategory = '/category'
    return(
        <div className='navbar'>
            <a className='navbar__menu' href={urlCategory}>Inicio</a>
            {
                tipProd.map((opcion, index)=>{
                    return <Link key={'opMenu'+index} className='navbar__menu' to={urlCategory+'/'+opcion.nombre}>{opcion.nombre}</Link>
                    /*
                    return <Link key={'opMenu'+index} className='navbar__menu' to={opcion.href+'/'+opcion.id}>{opcion.nombre}</Link>
                    */
                    /*return <a key={'opMenu'+index} className='navbar__menu' href={opcion.href+'/'+opcion.id}>{opcion.nombre}</a>*/
                })
            }
        </div>
    )
}

export default NavBar;