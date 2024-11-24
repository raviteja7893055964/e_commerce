import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/Cardcontext'

const Navbar = () => {
  const { cartItems } = useCart()
  const [search, setsearch] = useState();

  const list = ["mobilepage", "acpage", "computer", "fridge", "furniture", "kitchen", "men", "watch", "women"]




  return (
    <>



      <div className="navSection">
        <div className="title">
          <Link to='/home' style={{ textDecoration: "none" }}>
            <h2>E-commerce</h2>
          </Link>
        </div>
        <div className="search">

          <input type="text" placeholder='search.....' onChange={(e) => { setsearch(e.target.value) }} />
        </div>
        <div className="user">
          <div className="userDetails">
            <a href="/signup" style={{ color: "white", textDecoration: "none" }}>
              signin
            </a><span> / </span>
            <a href="/login" style={{ color: "white", textDecoration: "none" }}>
              Login
            </a>
            <span> / </span>
            <a href="/logout" style={{ color: "white", textDecoration: "none" }}>
              Logout
            </a>
          </div>
          <Link to='/cart' style={{ textDecoration: "none" }}>
            <div className="cart" >
              Cart
              <span> {cartItems.length}</span>
            </div>
          </Link>

        </div>


      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobilepage" style={{ textDecoration: "none" }}><li>Mobiles</li></Link>
          <Link to="/acpage" style={{ textDecoration: "none" }}><li>AC</li></Link>
          <Link to="/computer" style={{ textDecoration: "none" }}><li>Computers</li></Link>
          <Link to="/fridge" style={{ textDecoration: "none" }}><li>Fridges</li></Link>
          <Link to="/furniture" style={{ textDecoration: "none" }}><li>Furniture</li></Link>
          <Link to="/kitchen" style={{ textDecoration: "none" }}><li>Kitchen</li></Link>
          <Link to="/men" style={{ textDecoration: "none" }}><li>Men</li></Link>
          <Link to="/watch" style={{ textDecoration: "none" }}><li>Watches</li></Link>
          <Link to="/women" style={{ textDecoration: "none" }}><li>Woman Dressing</li></Link>

        </ul>
      </div>
    </>
  )
}

export default Navbar