import React from 'react';
import "../navbarLogo/NavbarLogo.css";
import icon from '../assets/icon.png';
import kidLink from "../assets/kids.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { tv, movies, sports, menu } from '../data/data.js';

function NavbarLogo() {
    return (
        <>

            <span className='hamburger'><GiHamburgerMenu style={{ "height": "19px", "width": "32px" }} />
                <div className='hamburgerHover'>
                    {
                        menu.map(item => (<span className='hamburgerTitle' key={item.id}>
                            <div className='divtitle'>
                                <span className='divIcon'>{item.icon}</span>{item.title}
                            </div>
                        </span>))
                    }
                </div>
            </span>
            <img src={icon} alt="icon" className='navbarIcon' />

            <div className='linksContainer'>
                <div className='tv links'>TV
                    <div className='tvHover'>
                        {
                            tv.map(item => (<span className='tvTitle' key={item.id}>
                                <div>{item.title}</div>
                            </span>))
                        }
                    </div>
                </div>
                <div className='movies links'>Movies
                    <div className='moviesHover'>
                        {
                            movies.map(item => (<span className='moviesTitle' key={item.id}>
                                <div>{item.title}</div>
                            </span>))
                        }
                    </div>
                </div>
                <div className='sports links'>Sports
                    <div className='sportsHover'>
                        {
                            sports.map(item => (<span className='sportsTitle' key={item.id}>
                                <div>{item.title}</div>
                            </span>))
                        }
                    </div></div>
                <div className='disney links'>Disney+</div>
                <img src={kidLink} alt="link" className='kidlinkimg' />
            </div>


        </>
    )
}

export default NavbarLogo