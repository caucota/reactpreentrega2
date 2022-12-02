import './Navbar.css';

const NavBar = () => {
    return(
        <div className='navbar'>
            <a className='navbar__menu' href='/'>Inicio</a>
            <a className='navbar__menu' href='/TipoProducto'>Pizzas</a>
            <a className='navbar__menu' href='/TipoProducto'>Empanadas</a>
            <a className='navbar__menu' href='/TipoProducto'>Lomitos</a>

        </div>
    )
}

export default NavBar;