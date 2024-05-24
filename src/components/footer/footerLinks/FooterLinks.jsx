import React from 'react';
import "../footerLinks/FooterLinks.css";
import { links } from "../data/data.js";

function FooterLinks() {
    return (
        <div>
            <div className='forPadding'>
                {links.map(data => (<span className='footerLinksContainer' key={data.id}>
                    <span className='footerLinks'>{data.title}</span>
                </span>))}
            </div>

            <p className='footerTitle'>© 2023 STAR. All Rights Reserved. HBO, Home Box Office and all
                related channel and programming logos are service marks of, and all related programming
                visuals and elements are the property of, Home Box Office, Inc.
                All rights reserved.</p>
        </div >
    )
}

export default FooterLinks