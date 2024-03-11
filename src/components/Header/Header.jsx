import '../style.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="header">
        <div className="container d-flex justify-content-end column-gap-3">
        <NavLink>Sign in / Guest</NavLink>
        <NavLink>Create Account</NavLink>
        </div>
     </div>  
    </>
  )
}

export default Header