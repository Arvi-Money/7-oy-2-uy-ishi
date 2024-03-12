import { NavLink } from 'react-router-dom'
import '../style.css'
import moon from '../../assets/moon-solid.svg'
import cart from '../../assets/cart.svg'

function Nav() {
  return (
    <>
    <div className="navbar">
        <div className="container">
            <div className="logo">
                <p>C</p>
            </div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
            </nav>
            <div className="icons">
                <img src={moon} alt="" />
                <img src={cart} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav