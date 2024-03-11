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
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Products</NavLink>
                <NavLink>Cart</NavLink>
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