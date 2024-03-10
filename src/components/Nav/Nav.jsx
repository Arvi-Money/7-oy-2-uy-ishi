import { NavLink } from 'react-router-dom'
import '../style.css'

function Nav() {
  return (
    <>
    <div className="navbar">
        <div className="logo">
            <p>C</p>
        </div>
        <nav>
            <NavLink><a>Home</a></NavLink>
            <NavLink><a>About</a></NavLink>
            <NavLink><a>Products</a></NavLink>
            <NavLink><a>cart</a></NavLink>
        </nav>
        <div className="icons">

        </div>
    </div>
    </>
  )
}

export default Nav