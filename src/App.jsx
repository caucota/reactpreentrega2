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


  return (
    <BrowserRouter className='App'>
      <Navbar tipProd={opcionesMenu}/>
      <Routes>
        <Route exact path='/' element={<Inicio />}/>
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
