import React from 'react'
import { Link } from 'react-router-dom'
import logoLight from '../imgs/logo-dark-removebg-preview.png'
import { faMapMarkedAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCcAmex, faCcDiscover, faCcMastercard, faCcVisa, faInstagram, faGoogle, faFacebook, faTwitter, faPinterest, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


function FooterPart() {
    return (
        <div className='footer'>
            <div className='footerTop'>
                <div className='footerLogo'>
                    <Link to='/'>
                        <img src={logoLight} alt="logoLight" />
                    </Link>
                    <ul>
                        <li>
                            <Link to='#'>
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                                <span>59 Street, New York City, Rose Town, 05 Dive House</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='#'>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                                <span>+123 345 67890</span>
                            </Link>
                        </li>
                        <li>

                            <Link to='#'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>info@example.com</span>
                            </Link>
                        </li>

                    </ul>
                </div>

                <div className='footerList'>
                    <h2>Information</h2>
                    <hr />
                    <ul>
                        <li>
                            <Link to='#'>About Us</Link>
                        </li>
                        <li>
                            <Link to='#'>Latest Post</Link>
                        </li>
                        <li>
                            <Link to='#'>Selling Tips</Link>
                        </li>
                        <li>
                            <Link to='#'>Advertising</Link>
                        </li>
                        <li>
                            <Link to='#'>Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div className='footerList'>
                    <h2>My Account</h2>
                    <hr />
                    <ul>
                        <li>
                            <Link to='#'>My Account</Link>
                        </li>
                        <li>
                            <Link to='#'>login/Register</Link>
                        </li>
                        <li>
                            <Link to='#'>Cart</Link>
                        </li>
                        <li>
                            <Link to='#'>Wishlist</Link>
                        </li>
                        <li>
                            <Link to='#'>Order History</Link>
                        </li>
                    </ul>
                </div>

                <div className='footerList'>
                    <h2>Help & Support</h2>
                    <hr />
                    <ul>
                        <li>
                            <Link to='#'>How To Shop</Link>
                        </li>
                        <li>
                            <Link to='#'>Payment</Link>
                        </li>
                        <li>
                            <Link to='#'>Returns</Link>
                        </li>
                        <li>
                            <Link to='#'>Delivery</Link>
                        </li>
                        <li>
                            <Link to='#'>Privacy & Cookie Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className='topBottomBorder'/>
            <div className='footerDown'>
                <div className='copyright'>
                    <h4>Copyright Metro 2020. Designed and Developed by </h4>
                    <h4>Radius Theme</h4>
                </div>
                <ul>
                    <li>
                        <Link to='#'>
                            <FontAwesomeIcon icon={faInstagram}/>
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <FontAwesomeIcon icon={faGoogle} />
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <FontAwesomeIcon icon={faPinterest} />
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link>
                    </li>
                </ul>

                <ul>

                    <li>
                        <Link to='#'>
                            <FontAwesomeIcon icon={faCcVisa} />
                        </Link>
                    </li>

                    <li>
                        <Link to='#'>
                            <FontAwesomeIcon icon={faCcMastercard} />
                        </Link>
                    </li>

                    <li>
                        <Link to='#'>
                            <FontAwesomeIcon icon={faCcDiscover} />
                        </Link>
                    </li>

                    <li>
                        <Link to='#'>
                            <FontAwesomeIcon icon={faCcAmex} />
                        </Link>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default FooterPart
