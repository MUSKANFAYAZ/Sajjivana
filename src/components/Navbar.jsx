import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>सajjivana</div>

      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>

      <ul className={styles.navlinks}>
        <li className={styles.active}>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Service</a>
        </li>
        <li>
          <a href="#shop">Shop Now</a>
        </li>
        <li>
          <a href="#product">Product ▾</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={styles.icons}>
        <span>🤍</span>
        <span>🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;
