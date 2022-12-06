import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TipoProducto from './components/TipoProducto/TipoProducto';
import Inicio from './components/Inicio/Inicio';


function App() {
  const opcionesMenu = [{id:'1', nombre:'Pizzas', href:'/TipoProducto', img:'https://club.elnuevodia.com/wp-content/uploads/2019/11/Abbys-Pizza.jpg'},
  {id:'2', nombre:'Empanadas', href:'/TipoProducto', img:'https://www.impulsonegocios.com/wp-content/uploads/2020/06/EMPANADAS.jpg'},
  {id:'3', nombre:'Lomitos', href:'/TipoProducto', img:'https://th.bing.com/th/id/OIP.3mMXOnsdPdk1decc80WBhQHaEX?pid=ImgDet&rs=1'}];
  localStorage.setItem("tiposProductos", JSON.stringify(opcionesMenu));

  const productosVta = [
  {id:'1', nombre:'Muzzarella', tipo : 'Pizzas', precio:'1000', stock:'30', img:'https://club.elnuevodia.com/wp-content/uploads/2019/11/Abbys-Pizza.jpg'},
  {id:'2', nombre:'Fugazzeta', tipo : 'Pizzas', precio:'1100', stock:'10', img:'https://club.elnuevodia.com/wp-content/uploads/2019/11/Abbys-Pizza.jpg'},
  {id:'3', nombre:'Especial', tipo : 'Pizzas', precio:'1250', stock:'5', img:'https://club.elnuevodia.com/wp-content/uploads/2019/11/Abbys-Pizza.jpg'},
  {id:'4', nombre:'Arabes', tipo : 'Empanadas', precio:'120', stock:'120', img:'https://www.impulsonegocios.com/wp-content/uploads/2020/06/EMPANADAS.jpg'},
  {id:'5', nombre:'Criollas', tipo : 'Empanadas', precio:'100', stock:'80', img:'https://www.impulsonegocios.com/wp-content/uploads/2020/06/EMPANADAS.jpg'},
  {id:'6', nombre:'Jamon y Queso', tipo : 'Empanadas', precio:'100', stock:'213', img:'https://www.impulsonegocios.com/wp-content/uploads/2020/06/EMPANADAS.jpg'},
  {id:'7', nombre:'Simple', tipo : 'Lomitos', precio:'950', stock:'10', img:'https://th.bing.com/th/id/OIP.3mMXOnsdPdk1decc80WBhQHaEX?pid=ImgDet&rs=1'},
  {id:'8', nombre:'Especial', tipo : 'Lomitos', precio:'1200', stock:'10', img:'https://th.bing.com/th/id/OIP.3mMXOnsdPdk1decc80WBhQHaEX?pid=ImgDet&rs=1'},
  {id:'9', nombre:'Doble Medallón', tipo : 'Lomitos', precio:'1500', stock:'10', img:'https://th.bing.com/th/id/OIP.3mMXOnsdPdk1decc80WBhQHaEX?pid=ImgDet&rs=1'}
  ]
  localStorage.setItem("productosVta", JSON.stringify(productosVta));


  return (
    <BrowserRouter className='App'>
      <Navbar tipProd={opcionesMenu}/>
      <Routes>
        <Route exact path='/' element={<Inicio />}/>
        <Route exact path='/category/:nombreCategoria' element={<ItemListContainer />}/>
        <Route exact path='/category' element={<ItemListContainer />}/>
        <Route exact path={opcionesMenu[0].href+'/:id'} element={<TipoProducto />}/>
      </Routes>
    </BrowserRouter>
    /*
    {
    <BrowserRouter className="App">
      <ItemListContainer/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact Path="/pizzas" element={<Pizzas/>}></Route>
        <Route exact path="/empanadas" element={<Empanadas/>}></Route>
        <Route exact path="/lomitos" element={<Lomitos/>}></Route>
      </Routes>
    </BrowserRouter>
    }
    */
  );
}



export default App;
