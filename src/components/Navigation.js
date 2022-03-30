import React from "react";
import { Link } from "react-router-dom";
import "../style/Navigation.css";
import account from "./img/account.png";
import cart from "./img/cart.png";
import admin from "./img/admin.png";
import magnify from "./img/magnify.png";

const Navigation = ({ token, user, handleLogOut }) => {
  return (
    <>
      <div className='nav-container'>
        <Link to='/' style={{ textDecoration: "none" }}>
          <div className='logo'>plantarrium</div>
        </Link>
        <div className='plant-categories-container'>
          <Link to='/shopall' style={{ textDecoration: "none" }}>
            <div className='plant-categories-link'>Shop All Plants</div>
          </Link>
          <Link to='/categories/largeplants' style={{ textDecoration: "none" }}>
            <div className='plant-categories-link'>Large Plants</div>
          </Link>
          <Link
            to='/categories/mediumplants'
            style={{ textDecoration: "none" }}
          >
            <div className='plant-categories-link'>Medium Plants</div>
          </Link>
          <Link to='/categories/smallplants' style={{ textDecoration: "none" }}>
            <div className='plant-categories-link'>Small Plants</div>
          </Link>
        </div>
        <div className='account'>
          <Link to='/'>
            <img
              className='nav-icon'
              src={magnify}
              alt='magnify-glass-for-search'
            />
          </Link>
          {user.isAdmin && (
            <Link to='/admin' style={{ textDecoration: "none" }}>
              <img className='nav-icon' src={admin} alt='admin-account-icon' />
            </Link>
          )}
          {token && (
            <Link to='/myaccount'>
              <img
                className='nav-icon'
                src={account}
                alt='avatar-account-icon'
              />
            </Link>
          )}
          {!token && (
            <Link to='/login'>
              <img
                className='nav-icon'
                src={account}
                alt='avatar-account-icon'
              />
            </Link>
          )}
          <Link to='/cart'>
            <img className='nav-icon' src={cart} alt='shopping-cart-icon' />
          </Link>
          {token && (
            <button onClick={handleLogOut} className='account-logout-button'>
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
