
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <div><p>Les damos la bienvenida a Syncro. Somos una empresa familiar dedicada a la fabricación de paletas de paddle. Nuestro objetivo es brindar productos de calidad a precios accesibles. Les invitamos a recorrer nuestra tienda en línea.</p></div>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App