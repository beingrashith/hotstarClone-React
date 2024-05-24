import React from 'react';
import "../navbarLinks/NavbarLinks.css";
import { AiOutlineSearch } from 'react-icons/ai';

function NavbarLinks() {
  return (
    <>
      <input className='search' type="text" id='text' name="id" placeholder='Search' />
      <AiOutlineSearch className='searchIcon' />

      <div className='floatRight'>
        <button
          type="button"
          className='subscribe'
        > SUBSCRIBE</button>
        <label className='login'>LOGIN</label>
      </div>
    </>
  )
}

export default NavbarLinks