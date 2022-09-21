import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import cartImage from '../assets/images/bag.png'
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { Cart } from '../Context'

function Header(props) {

    const { cart } = useContext(Cart);

  return (
    <header>
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/">Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/favorite">Favorite</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product-list">Product List</Link>
                        </li>
                        <li className='nav-item'>
                            <div className='cart-item'>
                            <Link to="/checkout">
                                <img src={cartImage} style={{width: "24px"}} />
                                <div className='cartcount'>{cart.length}</div>
                            </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Nav>
    </header>
  );
}

export default Header;