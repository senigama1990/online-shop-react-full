import React from 'react'
import { Link } from 'react-router-dom'
import {faAngleDown, faSearch, faUser, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../imgs/logo-dark.png'
import menuBar from '../imgs/menubar.png'


function NavBarPart() {
    return (
        <div className='navBarContainer'>
            <dir className='navBarWrapper'>
                <div>
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <ul className='navBarItems'>
                    <li>
                        <Link to='#'>
                            <span>Home</span>
                            <FontAwesomeIcon className='navItemsIcon' icon={faAngleDown} />
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <span>Shop</span>
                            <FontAwesomeIcon className='navItemsIcon' icon={faAngleDown} />
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <span>Pages</span>
                            <FontAwesomeIcon className='navItemsIcon' icon={faAngleDown} />
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <span>Elements</span>
                            <FontAwesomeIcon className='navItemsIcon' icon={faAngleDown} />
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <span>Blog</span>
                            <FontAwesomeIcon className='navItemsIcon' icon={faAngleDown} />
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>Contact</Link>
                    </li>
                </ul>
                <div className='navIconsWrapper'>
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                    <button><FontAwesomeIcon icon={faUser} /></button>
                    <button><FontAwesomeIcon icon={faCartArrowDown} /></button>
                    <span>$0.00</span>
                </div>
            </dir>
            <div className='navBarDownPart'>
                <div className='menuBarWrapper'>
                    <button>
                        <img src={menuBar} alt="menuBar" />
                        <span>categoies</span>
                    </button>
                </div>
                <div className='navBarInputWrapper'>
                    <input type="text" placeholder='Search Products Here'/>
                    <Link to='#'>
                        <span>All Categories</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Link>
                    <button>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBarPart
