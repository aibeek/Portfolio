import './style.css'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <a className='title' href="/">Portfolio</a>
            <div className='menu'>
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
