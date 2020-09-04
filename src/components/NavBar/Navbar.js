import React from 'react';
import { NavLink } from 'react-router-dom';
import nokiaLogo from '../logo/NOKIA_LOGO_RGB_MR.png';
import cartIcon from '../icons/cart.png';
import languagesIcon from '../icons/ic_language_black_48dp.png';
import './NavbarStyle.css';


const Navbar = () => {

    return(
        <div className='navbar'>
            <ul>
                <div className="navbarLogo">
                    <li>
                        <NavLink exact to='/' activeclassname='active' ><img className="navbarLogoImg" src={nokiaLogo} alt='nokiaLogo' ></img></NavLink>
                    </li>
                </div>
                    <div className="navbarList">
                    <li>
                        <NavLink to='/' activeclassname='active' className="navbarItem" >Classic Phones</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeclassname='active' className="navbarItem" >Community</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeclassname='active' className="navbarItem" >Support</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeclassname='active' className="navbarIcon" ><img className="navbarLogoImg" src={cartIcon} alt='cartIcon' ></img></NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeclassname='active' className="navbarIcon" ><img className="navbarLogoImg" src={languagesIcon} alt='languagesIcon' ></img></NavLink>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar ;