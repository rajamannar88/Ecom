import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import logo from "../logo.png"
import cart_icon from "../cart_icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
     const [menu,setmenu]=useState("shop");

  return (
    <div className={styles.navbar}>
      <div className={styles.navlog}>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
    
      <ul className={styles.navmenu}>
    <li onClick={() => setmenu("shops")}>
        <Link to='/' className={`${styles.navlink} ${menu === "shops" ? styles.active : ""}`}>Shop</Link>
        {menu === "shops" ? <hr /> : null}
    </li>
    <li onClick={() => setmenu("mens")}>
         <Link to='/mens'className={`${styles.navlink} ${menu === "mens" ? styles.active : ""}`}>Men</Link>
         {menu === "mens" ? <hr /> : null}
    </li>
    <li onClick={() => setmenu("womens")}>
       <Link to='/womens'className={`${styles.navlink} ${menu === "womens" ? styles.active : ""}`} >Women</Link>
       {menu === "womens" ? <hr /> : null}
    </li>
    <li onClick={() => setmenu("kids")}>
       <Link to='/kids'className={`${styles.navlink} ${menu === "kids" ? styles.active : ""}`} >Kids</Link>
       {menu === "kids" ? <hr /> : null}
    </li>
</ul>
    <div className={styles.navcart}>
      <Link to='/login'><button>Login</button></Link>
     <Link to='/cart'> <img src={cart_icon}/></Link>
      <div className={styles.navcartcount}>0</div>
    </div>
    </div>
  )
}

export default Navbar