import React from 'react'
import { Link } from 'react-router-dom'
import {faHeadphonesAlt, faClock, faDesktop, faMobileAlt, faGifts, faCarSide, faFootballBall, faBaby, faShoePrints, faGem, faCaretRight, faLaptop, faFemale, faTshirt, faWallet, faAngleDown, faSearch, faUser, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../imgs/logo-light-removebg-preview.png'
import menuBar from '../imgs/menubar.png'


function NavBarPart( {toggle, setToggle}) {
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
                    <Link to='/register'>
                        <button><FontAwesomeIcon icon={faUser} /></button>
                    </Link>
                    <Link to='/card'>
                        <button><FontAwesomeIcon icon={faCartArrowDown} /></button>
                    </Link>
                    <span>$0.00</span>
                </div>
            </dir>
            <div className='navBarDownPart'>
                <div className='menuBarWrapper'>
                    <button onClick={()=> setToggle(!toggle)} type='button'>
                        <img src={menuBar} alt="menuBar" />
                        <span>categoies</span>
                    </button>


                    {/* DropDown Categories start*/}
                    <ul className={toggle ? 'categoriesDropDown' : 'disactive'}>
                        <li>
                            <Link to='all-categories'>
                                <FontAwesomeIcon icon={faWallet} />
                                <span>All Categories</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='/men'>
                                <FontAwesomeIcon icon={faTshirt} />
                                <span>Men</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='/women'>
                                <FontAwesomeIcon icon={faFemale} />
                                <span>Women</span>
                            </Link>
                        </li>

                        <li className='electronics'>
                            <Link to='/electronics'>
                                <FontAwesomeIcon icon={faLaptop} />
                                <span>Electronics</span>
                                <FontAwesomeIcon className='faCaretRight' icon={faCaretRight} />
                            </Link>
                            <ul className='rightMenu'>

                                <li>
                                    <Link to='/mobile-phones'>
                                        <FontAwesomeIcon icon={faMobileAlt} />
                                        <span>Mobile phones</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/computers'>
                                        <FontAwesomeIcon icon={faDesktop} />
                                        <span>Computers</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/smartWatches'>
                                        <FontAwesomeIcon icon={faClock} />
                                        <span>Smart Watches</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/accessories'>
                                        <FontAwesomeIcon icon={faHeadphonesAlt} />
                                        <span>Accessories</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>

                        <li>
                            <Link to='/jewellery'>
                                <FontAwesomeIcon icon={faGem} />
                                <span>Jewellery</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='/shoes'>
                                <FontAwesomeIcon icon={faShoePrints} />
                                <span>Shoes</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='/kidsWaer'>
                                <FontAwesomeIcon icon={faBaby} />
                                <span>Kid's Wear</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='/sports'>
                                <FontAwesomeIcon icon={faFootballBall} />
                                <span>Sports</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='/toys'>
                                <FontAwesomeIcon icon={faCarSide} />
                                <span>Toys</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='/giftCorners'>
                                <FontAwesomeIcon icon={faGifts} />
                                <span>Gift Corners</span>
                            </Link>
                        </li>
                    </ul>
                    {/* DropDown Categories finish*/}


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
