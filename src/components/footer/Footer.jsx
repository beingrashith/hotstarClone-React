import React from 'react';
import "../footer/Footer.css";
import FooterIcons from './footerIcons/FooterIcons';
import FooterLinks from './footerLinks/FooterLinks';

function Footer() {
    return (
        <div className='footerIndex'>
            <FooterLinks />
            <FooterIcons />
        </div>
    )
}

export default Footer