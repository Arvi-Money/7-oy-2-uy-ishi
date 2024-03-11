import '../App.css'
import banner_img from '../assets/banner-img.webp'
import './style.css'

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
        <div className="image">
          <img src={banner_img} alt="" />
        </div>
      </div>
      </div>
    </>
  )
}

export default Home