import React from 'react';
import NavbarLinks from './navbarLinks/NavbarLinks';
import NavbarLogo from './navbarLogo/NavbarLogo';
import "../navbar/Navbar.css";
function Navbar() {
    return (
        <div className='navbarContainer'>
            <NavbarLogo />
            <NavbarLinks />
        </div>
    )
}

export default Navbar