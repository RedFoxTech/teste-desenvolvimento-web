import React, { useState, useEffect } from "react";
import styles from "./navBar.module.css";

import { Logo } from '../../assets'

function NavBar() {

  return (
    <div>

      <header className="fontNavbar" id={styles.Navbar}>
        <nav className={`container ${styles.Menu}`}>
          <div className={styles.LogoNav}>
            <a href="#Banner" ><img className={styles.LogoImg} src={Logo} alt="Logo Pokedex" /></a>
          </div>

          <div className={styles.UlButton}>
            <ul className={styles.NavBarList}>
              <li ><a className={styles.Impac} href="#Impacto" >Dashboard</a></li>
              <li><a className={styles.Mem} href="#Membros" >New Pokemon</a></li>
            </ul>
            <form className={styles.Search} class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>



      </header>
    </div>
  );
}

export default NavBar;
