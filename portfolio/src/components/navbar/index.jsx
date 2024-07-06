import { useState } from 'react';
import { getImageUrl } from '../../utils';
import './style.css';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='navbar'>
            <a className='title' href="/">Portfolio</a>
            <div className='menu'>
                <img
                    className="menu-btn"
                    src={
                        menuOpen ?
                            getImageUrl('nav/closeIcon.png') :
                            getImageUrl('nav/menuIcon.png')}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className='menu-items'>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#about">Experience</a>
                    </li>
                    <li>
                        <a href="#about">Projects</a>
                    </li>
                    <li>
                        <a href="#about">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
