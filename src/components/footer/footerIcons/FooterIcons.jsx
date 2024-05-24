import React from 'react';
import "../footerIcons/FooterIcons.css"
import icons from "../icons/fb-twitter.png";
import icon from "../icons/google-play.png";


function FooterIcons() {
  return (
    <>
      <p className='connectWithUs'>Connect with us</p>
      <img className='fbIcon' src={icons} alt='icons' />

      <p className='disneyApp'>Disney+ Hotstar App</p>
      <img className='googleIcon' src={icon} alt='icons' />
    </>
  )
}

export default FooterIcons