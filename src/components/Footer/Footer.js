import React from 'react';
import { NavLink } from 'react-router-dom';
import './FooterStyle.css';


const Footer = () => {
    return(
        <>
        <div className='footer'>
            <ul>
                <li className='FooterCopy'>
                    Copyright 2020 HDM Glogal. All Rights Reserved.
                </li>
                <li>
                    <NavLink activeclassname='active' to='/'>Privacy</NavLink>
                </li>
                <li>
                    <NavLink activeclassname='active' to='/'>Site Terms</NavLink>
                </li>
                <li>
                    <NavLink activeclassname='active' to='/' >Press</NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Footer ;