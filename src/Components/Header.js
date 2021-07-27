import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className='headerTextContent'>
                <div className='headerTextContentWrapper'>
                    <h3>soundbox</h3>
                    <h1>Bluetooth Speaker</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, debitis!</p>
                    <Link to='#'>explore now</Link>
                    <hr />
                </div>
                <div className='headerTextContentBtnBox'>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className='headerImageContent'>
                <div className='bgCircle'>
                    <div className="bgImage"></div>
                </div>
            </div>
        </div>
    )
}

export default Header
