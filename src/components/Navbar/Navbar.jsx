import { useContext, useState } from 'react';
import { assets } from '../../assets/assets'
import './navbar.css'
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { CgProfile } from "react-icons/cg";
import { IoBag } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token,setToken } = useContext(StoreContext)

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="" /></Link>
      <ul>
        <Link to="/"><li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</li></Link>
        <a href='#explore-menu'><li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</li></a>
        <a href='#app-download'><li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li></a>
        <a href='#footer'><li onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</li></a>
      </ul>
      <div className="navbar-right">
        <FaSearch />

        <div className="navbar-basket-icon">
          <Link to="/cart"><FaShoppingBasket /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className="navbar-profile">
            <div className='navber-profile-icon'><CgProfile /></div>
            <div className="navbar-profile-dropdown">
              <div onClick={()=>navigate('/myorders')} className="dropdown-item"><IoBag /><p>Orders</p></div>
              <hr />
              <div className="dropdown-item"><IoLogOutOutline /><p onClick={logout}>Logout</p></div>
            </div>

          </div>}
      </div>
    </div>

  )
}

export default Navbar
