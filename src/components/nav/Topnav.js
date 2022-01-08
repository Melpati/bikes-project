import React from 'react'
import './nav.css'

function Topnav() {
    return (
        <div className='topnav-sec'>
            <div className='container'>
            <ul className='topnav-left'>
                <li>Home</li>
                <li>About</li>
                <li>UsGift</li>
                <li>RegistryMy</li>
                <li>AccountContact UsBlog</li>
            </ul>
            <ul className='topnav-right'>
                <li><i classNam="fa fa-sign-in" aria-hidden="true"></i> My Account</li>
                <li><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart</li>
            </ul>
            </div>
        </div>
    )
}

export default Topnav
