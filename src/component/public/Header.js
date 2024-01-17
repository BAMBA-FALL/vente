// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div>
            <div>
                <header className='header'>
                    {/* <input type='text' placeholder='Que recherchez vous ?'/> */}
                    <nav>
                        <ul>
                            <li>
                                <Link to='/home'>Accueil</Link>
                            </li>
                            <li>
                                <Link to='/service'>Service</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li>
                                <Link to='/productlist'>Produits</Link> {/* Lien vers la liste des produits */}
                            </li>
                            <li>
                                <Link to='/admin'>&nbsp; Admin</Link>
                            </li>
                            <li>
                                <Link to='/shoppingcart'>Panier</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Header;
