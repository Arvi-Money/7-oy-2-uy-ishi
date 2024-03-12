import '../App.css'
import './style.css'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'
import product1 from '../assets/product1.webp'
import product2 from '../assets/product2.jpeg'
import product3 from '../assets/product3.jpeg'

function Home() {
  return (
    <>
    <div className="container">
      <div className="banner">
        <div className="text">
          <h1>We are changing the way people shop</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
          <button className="btn">OUR PRODUCTS</button>
        </div>
        <div className="main-raight carousel">
          <div className="carousel_item">
              <img src={hero1} alt="" />
           </div>
           <div className="carousel_item">
              <img src={hero2} alt="" />
           </div>
           <div className="carousel_item">
              <img src={hero3} alt="" />
           </div>
           <div className="carousel_item">
              <img src={hero4} alt="" />
           </div>               
      </div>
      </div>
      <div className="featured_products">
        <h1>Featured Products</h1>
        <hr />
        <div className="products">
          <div className="product">
            <img src={product1} alt="" />
            <div className="info">
              <h2>Avant-garde lamp</h2>
              <p>$179.99</p>
            </div>
          </div>
          <div className="product">
            <img src={product2} alt="" />
            <div className="info">
              <h2>Coffee table</h2>
              <p>$179.99</p>
            </div>
          </div>
          <div className="product">
            <img src={product3} alt="" />
            <div className="info">
              <h2>Comfy Bed</h2>
              <p>$129.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home