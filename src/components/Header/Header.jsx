import '../style.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
        <NavLink><a>Sign in / Guest</a></NavLink>
        <NavLink><a>Create Account</a></NavLink>
        </div>
     </div>  
    </>
  )
}

export default Header