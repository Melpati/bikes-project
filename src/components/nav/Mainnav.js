import React from 'react'
import Logo from '../../images/logo.png'
import Midnav from './Midnav'
import Searchnav from './Searchnav'

function Mainnav() {
    return (
        <div className='mainnav-sec'>
            <div className='container'>
                <div className='logo-sec col-md-3'>
                    <img src={Logo} alt="logo" className="logo-img" />
                </div>
                <div className='nav-sec col-md-6'>
                    <Midnav />
                </div>
                <div className='search-sec col-md-3'>
                    <Searchnav />
                </div>
            </div>
            
        </div>
    )
}

export default Mainnav
