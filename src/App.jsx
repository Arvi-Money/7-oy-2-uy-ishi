import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import About_product from './pages/About_product.jsx'


function App() {
 
  return (
    <>
      <Header></Header>
       <Nav></Nav>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/products' element={<Products></Products>}></Route>
         <Route path='/cart' element={<Cart></Cart>}></Route>
         <Route path='/about_product/:id' element={<About_product></About_product>}></Route>
       </Routes>
    </>
  )
}

export default App