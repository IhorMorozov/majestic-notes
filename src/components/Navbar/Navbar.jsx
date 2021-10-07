import React from 'react';
import styles from './Navbar.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { publicRoutes } from '../../router/routes';
import logo from '../../assets/images/majestic-logo-small.png';
import Seach from '../Search/Search';
import Search from '../Search/Search';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarItems}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.navbarLogo} />
        </Link>

        {publicRoutes.map((route) => (
          <NavLink
            activeClassName={styles.navbarItemActive}
            to={route.path}
            className={styles.navbarItem}
            key={route.path}
          >
            {route.link}
          </NavLink>
        ))}
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
